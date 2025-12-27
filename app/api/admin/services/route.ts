import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import Service from '@/lib/models/Service';

// GET all services (admin)
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

    const services = await Service.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(services);
  } catch (error) {
    console.error('Failed to fetch services:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST create new service
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
    const { title, description, icon, features, color, popular, isActive } = body;

    // Get the highest order number
    const lastService = await Service.findOne().sort({ order: -1 });
    const order = lastService ? lastService.order + 1 : 0;

    const service = await Service.create({
      title,
      description,
      icon,
      features,
      color,
      popular: popular || false,
      order,
      isActive: isActive !== false,
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error('Failed to create service:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
