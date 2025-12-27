import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Service from '@/lib/models/Service';

// GET all active services (public)
export async function GET() {
  try {
    await connectDB();

    const services = await Service.find({ isActive: true }).sort({ order: 1 });
    return NextResponse.json(services);
  } catch (error) {
    console.error('Failed to fetch services:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
