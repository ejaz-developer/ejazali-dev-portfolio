'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Star, GitFork, ExternalLink, Github, Calendar } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
  visibility: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        // Use your API route for better security
        const response = await axios.get<GitHubRepo[]>('https://api.github.com/users/ejaz-developer/repos');

        // Filter out forks and sort by stars/updated date
        const filteredRepos = response.data
          .filter((repo) => !repo.name.includes('fork'))
          .sort((a, b) => {
            // Sort by stars first, then by updated date
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          });
        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      Python: '#3572A5',
      Java: '#b07219',
      'C++': '#f34b7d',
      CSS: '#1572B6',
      HTML: '#e34c26',
      React: '#61dafb',
      Vue: '#4FC08D',
      PHP: '#777bb4',
      Go: '#00ADD8',
      Rust: '#dea584',
    };
    return colors[language || ''] || '#8b949e';
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-4 font-mono">
              Loading Projects...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-[var(--oxford-blue)]/20 border border-[var(--platinum)]/10 rounded-xl p-6 animate-pulse"
              >
                <div className="h-4 bg-[var(--platinum)]/20 rounded mb-4"></div>
                <div className="h-3 bg-[var(--platinum)]/10 rounded mb-2"></div>
                <div className="h-3 bg-[var(--platinum)]/10 rounded mb-4 w-3/4"></div>
                <div className="flex space-x-4">
                  <div className="h-3 bg-[var(--platinum)]/10 rounded w-16"></div>
                  <div className="h-3 bg-[var(--platinum)]/10 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-4 font-mono">
            My{' '}
            <span className="bg-gradient-to-r from-[var(--orange-web)] to-[var(--platinum)] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-[var(--platinum)]/80 max-w-2xl mx-auto">
            Here are some of my recent projects fetched directly from my GitHub. Each project
            represents my journey in software development.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="bg-[var(--oxford-blue)]/20 px-4 py-2 rounded-full border border-[var(--orange-web)]/30">
              <span className="text-[var(--orange-web)] font-semibold font-mono">
                {repos.length} Public Repositories
              </span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {repos.slice(0, displayCount).map((repo, index) => (
            <div
              key={repo.id}
              className="group bg-[var(--oxford-blue)]/10 backdrop-blur-sm border border-[var(--platinum)]/10 rounded-xl p-6 hover:bg-[var(--oxford-blue)]/20 hover:border-[var(--orange-web)]/30 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-[var(--white)] font-mono group-hover:text-[var(--orange-web)] transition-colors">
                      {repo.name}
                    </h3>
                    {repo.visibility === 'private' && (
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-md font-mono border border-red-500/30">
                        Private
                      </span>
                    )}
                  </div>
                  <p className="text-[var(--platinum)]/70 text-sm leading-relaxed mb-4">
                    {repo.description || 'No description available'}
                  </p>
                </div>
              </div>

              {/* Topics/Tags */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-[var(--orange-web)]/20 text-[var(--orange-web)] text-xs rounded-md font-mono"
                    >
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className="px-2 py-1 bg-[var(--platinum)]/10 text-[var(--platinum)]/60 text-xs rounded-md font-mono">
                      +{repo.topics.length - 3}
                    </span>
                  )}
                </div>
              )}

              {/* Project Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm">
                  {repo.language && (
                    <div className="flex items-center space-x-1">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      ></div>
                      <span className="text-[var(--platinum)]/80 font-mono">{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1 text-[var(--platinum)]/60">
                    <Star className="w-4 h-4" />
                    <span className="font-mono">{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[var(--platinum)]/60">
                    <GitFork className="w-4 h-4" />
                    <span className="font-mono">{repo.forks_count}</span>
                  </div>
                </div>
              </div>

              {/* Updated Date */}
              <div className="flex items-center space-x-1 text-xs text-[var(--platinum)]/50 mb-4">
                <Calendar className="w-3 h-3" />
                <span className="font-mono">Updated {formatDate(repo.updated_at)}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-[var(--orange-web)]/20 border border-[var(--orange-web)]/40 rounded-lg text-[var(--orange-web)] hover:bg-[var(--orange-web)] hover:text-[var(--black)] transition-all duration-300 group"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-semibold font-mono">Code</span>
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-[var(--platinum)]/20 border border-[var(--platinum)]/40 rounded-lg text-[var(--platinum)] hover:bg-[var(--platinum)] hover:text-[var(--black)] transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {repos.length > displayCount && (
          <div className="text-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + 6)}
              className="px-8 py-3 bg-gradient-to-r from-[var(--orange-web)] to-[var(--orange-web)]/80 text-[var(--black)] font-semibold rounded-full hover:shadow-lg hover:shadow-[var(--orange-web)]/25 transition-all duration-300 hover:scale-105 font-mono"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ejaz-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-[var(--orange-web)] text-[var(--orange-web)] font-semibold rounded-full transition-all duration-300 hover:bg-[var(--orange-web)] hover:text-[var(--black)] hover:scale-105 font-mono"
          >
            <Github className="w-5 h-5" />
            <span>View All on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
