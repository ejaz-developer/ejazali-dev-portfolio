import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import GitHubContributions from '@/components/GitHubContributions';
import ToolsIUse from '@/components/ToolsIUse';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projects />
      <GitHubContributions />
      <ToolsIUse />
      <Contact />
    </div>
  );
}
