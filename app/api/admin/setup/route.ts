import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import connectDB from '@/lib/mongodb';
import User, { IUser } from '@/lib/models/User';

// POST - Make current user admin (one-time setup)
export async function POST() {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    // Check if any admin exists
    const existingAdmin = await User.findOne({ role: 'admin' });

    if (existingAdmin) {
      return NextResponse.json(
        {
          error: 'Admin already exists. Use admin dashboard to manage roles.',
        },
        { status: 400 },
      );
    }

    // Check if user exists
    let dbUser = await User.findOne({ clerkId: user.id });

    if (dbUser) {
      // Update existing user to admin
      dbUser.role = 'admin';
      await dbUser.save();
    } else {
      // Create new admin user
      const userData: Partial<IUser> = {
        clerkId: user.id,
        email: user.emailAddresses[0]?.emailAddress || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        imageUrl: user.imageUrl,
        role: 'admin',
      };
      dbUser = new User(userData);
      await dbUser.save();
    }

    return NextResponse.json({
      message: 'Successfully set up as admin!',
      redirectTo: '/admin',
    });
  } catch (error) {
    console.error('Failed to setup admin:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
