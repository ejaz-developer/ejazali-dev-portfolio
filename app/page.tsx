import type { Metadata } from "next";
import Hero from "@/components/sections/hero";
import WhatIDo from "@/components/sections/what-i-do";
import Packages from "@/components/sections/packages";
import SelectedWork from "@/components/sections/selected-work";
import HowIWork from "@/components/sections/how-i-work";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1000px] space-y-20 px-4 pb-20 pt-16 sm:space-y-28 sm:px-6 sm:pt-24">
      <Hero />
      <WhatIDo />
      <Packages />
      <SelectedWork />
      <HowIWork />
      <Faq />
      <Contact />
    </div>
  );
}
