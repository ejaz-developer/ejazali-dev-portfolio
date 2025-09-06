import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Using public API only - replace 'ejaz-developer' with your actual GitHub username
    const username = 'ejaz-developer'; // Update this to your GitHub username

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'ejazali-dev-portfolio'
      },
    });

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} ${response.statusText}`);
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
  }
}
