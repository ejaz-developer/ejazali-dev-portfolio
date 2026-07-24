import Sidebar from "@/components/sidebar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import ParallaxSection from "@/components/parallax-section";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 min-w-0">
        <ParallaxSection offset={30}>
          <Hero />
        </ParallaxSection>
        <ParallaxSection offset={40}>
          <About />
        </ParallaxSection>
        <ParallaxSection offset={35}>
          <Projects />
        </ParallaxSection>
        <ParallaxSection offset={45}>
          <Experience />
        </ParallaxSection>
        <ParallaxSection offset={25}>
          <Contact />
        </ParallaxSection>
      </main>
    </div>
  );
}
