import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import connectDB from '@/lib/mongodb';
import Project from '@/lib/models/Project';
import User from '@/lib/models/User';

// GET /api/projects - Get all projects for the authenticated user
export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    // Find the user by clerk ID
    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get query params for filtering
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');

    // Build query
    const query: Record<string, unknown> = { clientId: user._id };
    if (status) query.status = status;
    if (priority) query.priority = priority;

    const projects = await Project.find(query)
      .sort({ updatedAt: -1 })
      .populate('clientId', 'firstName lastName email');

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/projects - Create a new project (admin only)
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    // Check if user is admin
    const user = await User.findOne({ clerkId: userId });

    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const {
      title,
      description,
      clientId,
      status,
      priority,
      startDate,
      estimatedEndDate,
      technologies,
      milestones,
      features,
    } = body;

    // Validate required fields
    if (!title || !description || !clientId) {
      return NextResponse.json(
        { error: 'Title, description, and client are required' },
        { status: 400 },
      );
    }

    const project = await Project.create({
      title,
      description,
      clientId,
      status: status || 'pending',
      priority: priority || 'medium',
      startDate: startDate || new Date(),
      estimatedEndDate,
      technologies: technologies || [],
      milestones: milestones || [],
      features: features || [],
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
