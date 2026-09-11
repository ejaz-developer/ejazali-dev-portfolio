import Hero from "@/components/sections/hero";
import ThingsIBuild from "@/components/sections/things-i-build";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ThingsIBuild />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
