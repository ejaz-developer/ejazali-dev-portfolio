'use client';

import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
  created_at: string;
}

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [githubData, setGithubData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsLoaded(true);

    // Fetch GitHub data
    const fetchGitHubData = async () => {
      try {
        const response = await axios.get<GitHubUser>('https://api.github.com/users/ejaz-developer');
        setGithubData(response.data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  useEffect(() => {
    const texts = [
      'Software Developer',
      'Frontend Enthusiast',
      'Full-Stack Builder',
      'YouTube Learner',
      'Problem Solver',
    ];

    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setCurrentText(current.substring(0, currentText.length + 1));
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex font-mono items-center justify-center relative overflow-hidden pt-20 font-['DM Sans']"
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--platinum) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Content */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Greeting */}
            <div className="mb-6">
              <span className="inline-block text-lg md:text-xl text-[var(--platinum)]/80 font-medium tracking-wide">
                Hi, I&apos;m
              </span>
            </div>

            {/* Name with gradient */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-[var(--orange-web)] via-[var(--platinum)] to-[var(--orange-web)] bg-clip-text text-transparent animate-gradient bg-300% leading-tight">
                {loading ? 'Loading...' : githubData?.name || 'Ejaz Ali'}
              </span>
              <span className="text-3xl md:text-5xl lg:text-6xl ml-2 animate-bounce">👋</span>
            </h1>

            {/* Dynamic Role */}
            <div className="mb-8 h-16 flex items-center justify-center">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[var(--oxford-blue)] bg-[var(--platinum)]/10 px-6 py-3 rounded-full border border-[var(--oxford-blue)]/20">
                <span className="text-[var(--orange-web)]">{currentText}</span>
                <span className="animate-pulse text-[var(--platinum)]">|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-[var(--platinum)]/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              {loading ? (
                <>
                  I&apos;m a passionate{' '}
                  <span className="text-[var(--orange-web)] font-semibold">
                    self-taught software developer
                  </span>{' '}
                  learning coding from YouTube. I love building{' '}
                  <span className="text-[var(--orange-web)] font-semibold">front-end</span> and{' '}
                  <span className="text-[var(--orange-web)] font-semibold">
                    full-stack applications
                  </span>{' '}
                  that solve real-world problems.
                </>
              ) : (
                <>
                  {githubData?.bio && <span className="block mb-4">{githubData.bio}</span>}
                  I&apos;m a passionate{' '}
                  <span className="text-[var(--orange-web)] font-semibold">
                    self-taught software developer
                  </span>{' '}
                  {githubData?.location && (
                    <>
                      from{' '}
                      <span className="text-[var(--orange-web)] font-semibold">
                        {githubData.location}
                      </span>{' '}
                    </>
                  )}
                  learning coding from YouTube. I love building{' '}
                  <span className="text-[var(--orange-web)] font-semibold">front-end</span> and{' '}
                  <span className="text-[var(--orange-web)] font-semibold">
                    full-stack applications
                  </span>{' '}
                  that solve real-world problems.
                </>
              )}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[var(--orange-web)] to-[var(--orange-web)]/80 text-[var(--black)] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--orange-web)]/25 hover:scale-105">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--platinum)] to-[var(--orange-web)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              {[
                {
                  name: 'GitHub',
                  icon: GithubIcon,
                  href: githubData?.html_url || 'https://github.com/ejaz-developer',
                },
                {
                  name: 'LinkedIn',
                  icon: LinkedinIcon,
                  href: '#',
                },
              ].map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-[var(--oxford-blue)]/20 border border-[var(--platinum)]/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--orange-web)] hover:scale-110 hover:border-[var(--orange-web)]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    <social.icon className="text-[var(--platinum)] group-hover:text-[var(--black)]" />
                  </span>
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              {[
                {
                  number: loading ? '...' : `${githubData?.public_repos || 0}`,
                  label: 'Public Repos',
                },
                {
                  number: loading ? '...' : `${githubData?.followers || 0}`,
                  label: 'Followers',
                },
                {
                  number: loading ? '...' : `${githubData?.following || 0}`,
                  label: 'Following',
                },
                {
                  number: loading
                    ? '...'
                    : new Date().getFullYear() -
                      new Date(githubData?.created_at || '2024').getFullYear() +
                      '+',
                  label: 'Years on GitHub',
                },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-[var(--oxford-blue)]/10 border border-[var(--platinum)]/10 rounded-xl hover:bg-[var(--oxford-blue)]/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-[var(--orange-web)] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[var(--platinum)]/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Scroll Down Indicator */}
            <button
              onClick={scrollToNext}
              className="animate-bounce hover:text-[var(--orange-web)] transition-colors duration-300"
              aria-label="Scroll down"
            >
              <svg
                className="w-8 h-8 text-[var(--platinum)]/60 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-[var(--orange-web)]/30 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-10 w-16 h-16 border border-[var(--platinum)]/20 rounded-lg rotate-45 animate-spin"
        style={{ animationDuration: '10s' }}
      ></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-[var(--orange-web)]/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-20 w-8 h-8 bg-[var(--platinum)]/30 rotate-45 animate-pulse"></div>
    </section>
  );
};

export default Hero;
