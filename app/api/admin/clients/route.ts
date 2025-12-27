import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import Project from '@/lib/models/Project';

// GET all clients (admin)
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

    const users = await User.find().sort({ createdAt: -1 }).lean();

    // Get project counts for each user
    const usersWithProjectCount = await Promise.all(
      users.map(async (u) => {
        const projectCount = await Project.countDocuments({ client: u._id });
        return { ...u, projectCount };
      }),
    );

    return NextResponse.json(usersWithProjectCount);
  } catch (error) {
    console.error('Failed to fetch clients:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
