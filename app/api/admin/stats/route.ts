import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import Project from '@/lib/models/Project';
import Message from '@/lib/models/Message';

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

    // Get all stats
    const [
      totalProjects,
      activeProjects,
      completedProjects,
      totalClients,
      pendingMessages,
      recentProjects,
      recentMessages,
    ] = await Promise.all([
      Project.countDocuments(),
      Project.countDocuments({ status: 'in-progress' }),
      Project.countDocuments({ status: 'completed' }),
      User.countDocuments({ role: 'client' }),
      Message.countDocuments({ status: 'unread', receiverId: dbUser._id }),
      Project.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .populate('clientId', 'firstName lastName')
        .lean(),
      Message.find({ receiverId: dbUser._id })
        .sort({ createdAt: -1 })
        .limit(5)
        .populate('senderId', 'firstName lastName')
        .lean(),
    ]);

    // Transform projects to match expected format
    const transformedProjects = recentProjects.map((project) => ({
      ...project,
      client: project.clientId,
    }));

    // Transform messages to match expected format
    const transformedMessages = recentMessages.map((message) => ({
      ...message,
      sender: message.senderId,
      read: message.status === 'read' || message.status === 'replied',
    }));

    return NextResponse.json({
      totalProjects,
      activeProjects,
      completedProjects,
      totalClients,
      pendingMessages,
      totalRevenue: 0, // Revenue tracking not implemented yet
      recentProjects: transformedProjects,
      recentMessages: transformedMessages,
    });
  } catch (error) {
    console.error('Failed to fetch admin stats:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
