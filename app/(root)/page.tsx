import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import GitHubContributions from '@/components/GitHubContributions';
import ToolsIUse from '@/components/ToolsIUse';

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <GitHubContributions />
      <ToolsIUse />
    </div>
  );
}
