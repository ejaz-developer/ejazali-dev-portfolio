import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
