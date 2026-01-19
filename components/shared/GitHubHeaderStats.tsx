'use client';

import { useEffect, useState } from 'react';
import { Users, Eye } from 'lucide-react';
import Image from 'next/image';

interface GitHubHeaderStatsProps {
   username: string;
}

export default function GitHubHeaderStats({
   username,
}: GitHubHeaderStatsProps) {
   const [followers, setFollowers] = useState<number | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchFollowers = async () => {
         try {
            const response = await fetch(
               `https://api.github.com/users/${username}`
            );
            if (response.ok) {
               const data = await response.json();
               setFollowers(data.followers || 0);
            }
         } catch (error) {
            console.error('Failed to fetch GitHub followers:', error);
         } finally {
            setLoading(false);
         }
      };

      fetchFollowers();
   }, [username]);

   if (loading) {
      return null;
   }

   return (
      <div className="flex items-center gap-3">
         {/* Followers */}
         {followers !== null && (
            <a
               href={`https://github.com/${username}?tab=followers`}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-sm"
               title="GitHub Followers"
            >
               <Users className="h-4 w-4" />
               <span className="font-medium">{followers}</span>
            </a>
         )}

         {/* Profile Views Counter */}
         <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-sm"
            title="Profile Views"
         >
            <Eye className="h-4 w-4" />
            <img
               src={`https://komarev.com/ghpvc/?username=${username}&style=flat-square&color=3B82F6&label=`}
               alt="Profile views"
               className="h-5"
            />
         </a>
      </div>
   );
}
