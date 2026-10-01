import Hero from "@/components/sections/hero";
import ThingsIBuild from "@/components/sections/things-i-build";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 gap-3 px-4 pt-28 pb-8 sm:px-6 sm:pt-36 lg:grid-cols-12">
      <Hero />
      <ThingsIBuild />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
