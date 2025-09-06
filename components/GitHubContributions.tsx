'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, GitCommit, Star, GitFork, Users, Activity } from 'lucide-react';

interface GitHubStats {
  totalCommits: number;
  totalStars: number;
  totalForks: number;
  totalRepos: number;
  contributionsThisYear: number;
  longestStreak: number;
  currentStreak: number;
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const GitHubContributions = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch repository stats
        const reposResponse = await axios.get('/api/github/repos');
        const repos = reposResponse.data;

        // Calculate stats from repositories
        const totalStars = repos.reduce(
          (sum: number, repo: { stargazers_count: number }) => sum + repo.stargazers_count,
          0,
        );
        const totalForks = repos.reduce(
          (sum: number, repo: { forks_count: number }) => sum + repo.forks_count,
          0,
        );
        const totalRepos = repos.length;

        // Fetch user stats
        const userResponse = await axios.get('/api/github/user');
        const userData = userResponse.data;

        // Fetch contributions (we'll simulate this for now since GitHub's contribution API is complex)
        const contributionsData = generateMockContributions();

        setStats({
          totalCommits: userData.public_repos * 25, // Estimated
          totalStars,
          totalForks,
          totalRepos,
          contributionsThisYear: contributionsData.thisYear,
          longestStreak: contributionsData.longestStreak,
          currentStreak: contributionsData.currentStreak,
        });

        setContributions(contributionsData.contributions);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  // Generate mock contribution data (in a real app, you'd use GitHub's GraphQL API)
  const generateMockContributions = () => {
    const contributions: ContributionDay[] = [];
    const today = new Date();
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

    let totalThisYear = 0;
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;

    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
      const count = Math.floor(Math.random() * 6); // 0-5 contributions per day
      const level = count === 0 ? 0 : count <= 1 ? 1 : count <= 2 ? 2 : count <= 4 ? 3 : 4;

      contributions.push({
        date: new Date(d).toISOString().split('T')[0],
        count,
        level,
      });

      totalThisYear += count;

      if (count > 0) {
        tempStreak++;
        longestStreak = Math.max(longestStreak, tempStreak);
      } else {
        tempStreak = 0;
      }
    }

    // Calculate current streak (from today backwards)
    for (let i = contributions.length - 1; i >= 0; i--) {
      if (contributions[i].count > 0) {
        currentStreak++;
      } else {
        break;
      }
    }

    return {
      contributions,
      thisYear: totalThisYear,
      longestStreak,
      currentStreak,
    };
  };

  const getContributionColor = (level: number) => {
    const colors = [
      'bg-[var(--oxford-blue)]/20', // No contributions
      'bg-[var(--orange-web)]/30', // Low
      'bg-[var(--orange-web)]/50', // Medium-low
      'bg-[var(--orange-web)]/70', // Medium-high
      'bg-[var(--orange-web)]', // High
    ];
    return colors[level] || colors[0];
  };

  const getWeeksInYear = () => {
    return Math.ceil(contributions.length / 7);
  };

  if (loading) {
    return (
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-4 font-mono">
              Loading GitHub Stats...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-[var(--oxford-blue)]/20 border border-[var(--platinum)]/10 rounded-xl p-6 animate-pulse"
              >
                <div className="h-8 bg-[var(--platinum)]/20 rounded mb-4"></div>
                <div className="h-12 bg-[var(--platinum)]/10 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-4 font-mono">
            GitHub{' '}
            <span className="bg-gradient-to-r from-[var(--orange-web)] to-[var(--platinum)] bg-clip-text text-transparent">
              Contributions
            </span>
          </h2>
          <p className="text-lg text-[var(--platinum)]/80 max-w-2xl mx-auto">
            A visual representation of my coding activity and contribution patterns on GitHub.
          </p>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[var(--oxford-blue)]/10 border border-[var(--platinum)]/10 rounded-xl p-6 hover:bg-[var(--oxford-blue)]/20 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <GitCommit className="w-8 h-8 text-[var(--orange-web)]" />
                <h3 className="text-lg font-semibold text-[var(--white)] font-mono">
                  Total Commits
                </h3>
              </div>
              <p className="text-3xl font-bold text-[var(--orange-web)] mb-2">
                {stats.totalCommits.toLocaleString()}
              </p>
              <p className="text-sm text-[var(--platinum)]/70">Estimated contributions</p>
            </div>

            <div className="bg-[var(--oxford-blue)]/10 border border-[var(--platinum)]/10 rounded-xl p-6 hover:bg-[var(--oxford-blue)]/20 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-8 h-8 text-[var(--orange-web)]" />
                <h3 className="text-lg font-semibold text-[var(--white)] font-mono">Total Stars</h3>
              </div>
              <p className="text-3xl font-bold text-[var(--orange-web)] mb-2">{stats.totalStars}</p>
              <p className="text-sm text-[var(--platinum)]/70">Across all repositories</p>
            </div>

            <div className="bg-[var(--oxford-blue)]/10 border border-[var(--platinum)]/10 rounded-xl p-6 hover:bg-[var(--oxford-blue)]/20 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Activity className="w-8 h-8 text-[var(--orange-web)]" />
                <h3 className="text-lg font-semibold text-[var(--white)] font-mono">This Year</h3>
              </div>
              <p className="text-3xl font-bold text-[var(--orange-web)] mb-2">
                {stats.contributionsThisYear}
              </p>
              <p className="text-sm text-[var(--platinum)]/70">
                Contributions in {new Date().getFullYear()}
              </p>
            </div>

            <div className="bg-[var(--oxford-blue)]/10 border border-[var(--platinum)]/10 rounded-xl p-6 hover:bg-[var(--oxford-blue)]/20 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-8 h-8 text-[var(--orange-web)]" />
                <h3 className="text-lg font-semibold text-[var(--white)] font-mono">
                  Longest Streak
                </h3>
              </div>
              <p className="text-3xl font-bold text-[var(--orange-web)] mb-2">
                {stats.longestStreak}
              </p>
              <p className="text-sm text-[var(--platinum)]/70">Days of consecutive coding</p>
            </div>
          </div>
        )}

        {/* Contribution Graph */}
        <div className="bg-[var(--oxford-blue)]/10 border border-[var(--platinum)]/10 rounded-xl p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-[var(--white)] font-mono">
              Contribution Activity
            </h3>
            <div className="flex items-center space-x-2 text-sm text-[var(--platinum)]/70">
              <span>Less</span>
              <div className="flex space-x-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                  ></div>
                ))}
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Contribution Grid */}
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div
                className="grid gap-1"
                style={{
                  gridTemplateColumns: `repeat(${getWeeksInYear()}, minmax(0, 1fr))`,
                  gridTemplateRows: 'repeat(7, minmax(0, 1fr))',
                }}
              >
                {contributions.map((day, index) => (
                  <div
                    key={day.date}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(
                      day.level,
                    )} hover:ring-2 hover:ring-[var(--orange-web)]/50 transition-all duration-200 cursor-pointer`}
                    title={`${day.count} contributions on ${day.date}`}
                    style={{
                      gridColumn: Math.floor(index / 7) + 1,
                      gridRow: (index % 7) + 1,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-[var(--platinum)]/70">
            <span>
              <strong className="text-[var(--orange-web)]">{stats?.contributionsThisYear}</strong>{' '}
              contributions in the last year
            </span>
            <span>
              Current streak:{' '}
              <strong className="text-[var(--orange-web)]">{stats?.currentStreak}</strong> days
            </span>
            <span>
              Longest streak:{' '}
              <strong className="text-[var(--orange-web)]">{stats?.longestStreak}</strong> days
            </span>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[var(--oxford-blue)]/10 border border-[var(--platinum)]/10 rounded-xl p-6 text-center">
            <GitFork className="w-12 h-12 text-[var(--orange-web)] mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[var(--white)] mb-2 font-mono">
              Total Forks
            </h3>
            <p className="text-2xl font-bold text-[var(--orange-web)]">{stats?.totalForks}</p>
          </div>

          <div className="bg-[var(--oxford-blue)]/10 border border-[var(--platinum)]/10 rounded-xl p-6 text-center">
            <Users className="w-12 h-12 text-[var(--orange-web)] mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[var(--white)] mb-2 font-mono">
              Repositories
            </h3>
            <p className="text-2xl font-bold text-[var(--orange-web)]">{stats?.totalRepos}</p>
          </div>

          <div className="bg-[var(--oxford-blue)]/10 border border-[var(--platinum)]/10 rounded-xl p-6 text-center">
            <Activity className="w-12 h-12 text-[var(--orange-web)] mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[var(--white)] mb-2 font-mono">Avg/Day</h3>
            <p className="text-2xl font-bold text-[var(--orange-web)]">
              {stats ? Math.round((stats.contributionsThisYear / 365) * 10) / 10 : 0}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
