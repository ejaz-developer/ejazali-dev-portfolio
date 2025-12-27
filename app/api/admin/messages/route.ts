import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import Message from '@/lib/models/Message';

// GET all messages (admin)
export async function GET() {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    // Check if user is admin
    const dbUser = await User.findOne({ clerkId: user.id });
    if (!dbUser || dbUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Get messages where admin is the recipient
    const messages = await Message.find({ receiverId: dbUser._id })
      .sort({ createdAt: -1 })
      .populate('senderId', 'firstName lastName email profileImage')
      .populate('receiverId', 'firstName lastName')
      .lean();

    // Transform to expected format
    const transformedMessages = messages.map((message) => ({
      ...message,
      sender: message.senderId,
      recipient: message.receiverId,
      read: message.status === 'read' || message.status === 'replied',
    }));

    return NextResponse.json(transformedMessages);
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST send new message (admin reply)
export async function POST(request: Request) {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    // Check if user is admin
    const dbUser = await User.findOne({ clerkId: user.id });
    if (!dbUser || dbUser.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const { recipientId, subject, content } = body;

    if (!recipientId || !subject || !content) {
      return NextResponse.json(
        { error: 'Recipient, subject, and content are required' },
        { status: 400 },
      );
    }

    const message = await Message.create({
      senderId: dbUser._id,
      receiverId: recipientId,
      subject,
      content,
      status: 'unread',
    });

    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    console.error('Failed to send message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
