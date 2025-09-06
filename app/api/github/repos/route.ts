import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Using public API only - replace 'ejaz-developer' with your actual GitHub username
    const username = 'ejaz-developer'; // Update this to your GitHub username

    console.log('Fetching public repositories only');

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=50&type=public`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'ejazali-dev-portfolio',
        },
      }
    );

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Fetched ${data.length} public repositories`);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json({ error: 'Failed to fetch repositories' }, { status: 500 });
  }
}
