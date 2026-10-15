import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import WhatIDo from "@/components/sections/what-i-do";
import SelectedWork from "@/components/sections/selected-work";
import About from "@/components/sections/about";
import HowIWork from "@/components/sections/how-i-work";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1000px] space-y-24 px-4 pt-24 pb-20 sm:px-6 sm:space-y-28 sm:pt-28">
      <Hero />
      <WhatIDo />
      <SelectedWork />
      <About />
      <HowIWork />
      <Contact />
    </div>
  );
}
