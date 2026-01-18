'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, GitBranch, Star, GitFork, Code2 } from 'lucide-react';
import { useState } from 'react';

interface GitHubStatsProps {
   username: string;
}

export default function GitHubStats({ username }: GitHubStatsProps) {
   const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

   const handleImageError = (key: string) => {
      setImageErrors((prev) => ({ ...prev, [key]: true }));
   };

   // Using more reliable image CDN URLs with proper caching
   const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=18181B&title_color=3B82F6&icon_color=3B82F6&text_color=A1A1AA&count_private=true&cache_seconds=86400`;

   const streakUrl = `https://streak-stats.demolab.com/?user=${username}&theme=tokyonight&hide_border=true&background=18181B&ring=3B82F6&fire=3B82F6&currStreakLabel=A1A1AA`;

   const topLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=18181B&title_color=3B82F6&text_color=A1A1AA&cache_seconds=86400`;

   const activityGraphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true&bg_color=18181B&color=3B82F6&line=3B82F6&point=A1A1AA`;

   return (
      <>
         {/* GitHub Stats Cards */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Stats Card */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
               <CardContent className="p-6">
                  {!imageErrors.stats ? (
                     <img
                        src={statsUrl}
                        alt="GitHub Stats"
                        className="w-full"
                        onError={() => handleImageError('stats')}
                        loading="lazy"
                     />
                  ) : (
                     <div className="flex flex-col items-center justify-center py-12 text-center">
                        <Code2 className="h-16 w-16 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">
                           GitHub Stats
                        </h3>
                        <p className="text-zinc-400 mb-4">
                           View detailed statistics on GitHub
                        </p>
                        <Button
                           size="sm"
                           variant="outline"
                           className="border-zinc-700 text-zinc-300"
                           asChild
                        >
                           <a
                              href={`https://github.com/${username}`}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <Github className="mr-2 h-4 w-4" />
                              View Profile
                           </a>
                        </Button>
                     </div>
                  )}
               </CardContent>
            </Card>

            {/* Streak Stats */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
               <CardContent className="p-6">
                  {!imageErrors.streak ? (
                     <img
                        src={streakUrl}
                        alt="GitHub Streak"
                        className="w-full"
                        onError={() => handleImageError('streak')}
                        loading="lazy"
                     />
                  ) : (
                     <div className="flex flex-col items-center justify-center py-12 text-center">
                        <Star className="h-16 w-16 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">
                           Contribution Streak
                        </h3>
                        <p className="text-zinc-400 mb-4">
                           Consistent coding activity
                        </p>
                        <Button
                           size="sm"
                           variant="outline"
                           className="border-zinc-700 text-zinc-300"
                           asChild
                        >
                           <a
                              href={`https://github.com/${username}`}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <Github className="mr-2 h-4 w-4" />
                              View Activity
                           </a>
                        </Button>
                     </div>
                  )}
               </CardContent>
            </Card>
         </div>

         {/* Language Stats and Contribution Graph */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Top Languages */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
               <CardContent className="p-6">
                  {!imageErrors.langs ? (
                     <img
                        src={topLangsUrl}
                        alt="Top Languages"
                        className="w-full"
                        onError={() => handleImageError('langs')}
                        loading="lazy"
                     />
                  ) : (
                     <div className="flex flex-col items-center justify-center py-12 text-center">
                        <Code2 className="h-16 w-16 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">
                           Top Languages
                        </h3>
                        <p className="text-zinc-400">
                           TypeScript, JavaScript, Python, and more
                        </p>
                     </div>
                  )}
               </CardContent>
            </Card>

            {/* Activity Indicator */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
               <CardContent className="p-6 flex items-center justify-center">
                  <div className="text-center">
                     <GitBranch className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                     <h3 className="text-xl font-bold text-white mb-2">
                        Active Contributor
                     </h3>
                     <p className="text-zinc-400 mb-4">
                        Consistently contributing to open-source projects and
                        personal repositories.
                     </p>
                     <div className="flex gap-4 justify-center text-sm">
                        <div className="flex items-center gap-1 text-zinc-400">
                           <GitFork className="h-4 w-4" />
                           <span>Open Source</span>
                        </div>
                        <div className="flex items-center gap-1 text-zinc-400">
                           <Star className="h-4 w-4" />
                           <span>Quality Code</span>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>

         {/* Contribution Graph */}
         <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
            <CardContent className="p-6">
               <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Contribution Activity
               </h3>
               {!imageErrors.activity ? (
                  <img
                     src={activityGraphUrl}
                     alt="Contribution Graph"
                     className="w-full"
                     onError={() => handleImageError('activity')}
                     loading="lazy"
                  />
               ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                     <GitBranch className="h-16 w-16 text-blue-500 mb-4" />
                     <h3 className="text-xl font-bold text-white mb-2">
                        GitHub Activity
                     </h3>
                     <p className="text-zinc-400 mb-4">
                        View my contribution graph and activity on GitHub
                     </p>
                     <Button
                        size="sm"
                        variant="outline"
                        className="border-zinc-700 text-zinc-300"
                        asChild
                     >
                        <a
                           href={`https://github.com/${username}`}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Github className="mr-2 h-4 w-4" />
                           View on GitHub
                        </a>
                     </Button>
                  </div>
               )}
            </CardContent>
         </Card>

         {/* GitHub Profile Link */}
         <div className="text-center mt-8">
            <Button
               size="lg"
               variant="outline"
               className="border-zinc-700 text-white hover:bg-zinc-800"
               asChild
            >
               <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Github className="mr-2 h-5 w-5" />
                  View Full GitHub Profile
               </a>
            </Button>
         </div>
      </>
   );
}
