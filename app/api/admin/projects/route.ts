import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import Project from '@/lib/models/Project';

// GET all projects (admin)
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

    const projects = await Project.find()
      .sort({ createdAt: -1 })
      .populate('clientId', 'firstName lastName email')
      .lean();

    // Transform to expected format
    const transformedProjects = projects.map((project) => ({
      ...project,
      client: project.clientId,
      endDate: project.estimatedEndDate,
      budget: 0, // Budget field not in current model
    }));

    return NextResponse.json(transformedProjects);
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST create new project (admin)
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
    const { title, description, clientId, status, priority, progress, startDate, endDate } = body;

    if (!title || !description || !clientId) {
      return NextResponse.json(
        { error: 'Title, description, and client are required' },
        { status: 400 },
      );
    }

    // Map status values
    const statusMap: Record<string, string> = {
      pending: 'pending',
      in_progress: 'in-progress',
      on_hold: 'on-hold',
      completed: 'completed',
      cancelled: 'on-hold',
    };

    const project = await Project.create({
      title,
      description,
      clientId,
      status: statusMap[status] || 'pending',
      priority: priority || 'medium',
      progress: progress || 0,
      startDate: startDate || new Date(),
      estimatedEndDate: endDate || undefined,
    });

    const populatedProject = await Project.findById(project._id).populate(
      'clientId',
      'firstName lastName email',
    );

    return NextResponse.json(
      {
        ...populatedProject?.toObject(),
        client: populatedProject?.clientId,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Failed to create project:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
