import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <SidebarInset>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </SidebarInset>
    </SidebarProvider>
  );
}
