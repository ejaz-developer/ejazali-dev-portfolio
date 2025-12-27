import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import connectDB from '@/lib/mongodb';
import Message from '@/lib/models/Message';
import User from '@/lib/models/User';

// GET /api/messages - Get all messages for the authenticated user
export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get query params for filtering
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const projectId = searchParams.get('projectId');

    // Build query - get messages where user is sender or receiver
    const query: Record<string, unknown> = {
      $or: [{ senderId: user._id }, { receiverId: user._id }],
    };
    if (status) query.status = status;
    if (projectId) query.projectId = projectId;

    const messages = await Message.find(query)
      .sort({ createdAt: -1 })
      .populate('senderId', 'firstName lastName email imageUrl')
      .populate('receiverId', 'firstName lastName email imageUrl')
      .populate('projectId', 'title');

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/messages - Create a new message
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const body = await request.json();
    const { receiverId, subject, content, projectId } = body;

    // Validate required fields
    if (!receiverId || !subject || !content) {
      return NextResponse.json(
        { error: 'Receiver, subject, and content are required' },
        { status: 400 },
      );
    }

    // Verify receiver exists
    const receiver = await User.findById(receiverId);
    if (!receiver) {
      return NextResponse.json({ error: 'Receiver not found' }, { status: 404 });
    }

    const message = await Message.create({
      senderId: user._id,
      receiverId,
      subject,
      content,
      projectId: projectId || null,
      status: 'unread',
    });

    const populatedMessage = await Message.findById(message._id)
      .populate('senderId', 'firstName lastName email imageUrl')
      .populate('receiverId', 'firstName lastName email imageUrl')
      .populate('projectId', 'title');

    return NextResponse.json(populatedMessage, { status: 201 });
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
