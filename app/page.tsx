import AboutSection from '@/components/shared/AboutSection';
import ContactSection from '@/components/shared/ContactSection';
import Hero from '@/components/shared/Hero';
import ServiceSection from '@/components/shared/ServiceSection';
import WorkSection from '@/components/shared/WorkSection';
import ExperienceSection from '@/components/shared/ExperienceSection';
import React from 'react';

const Home = () => {
   return (
      <div className="min-h-screen">
         <Hero />
         <AboutSection />
         <ExperienceSection />
         <ServiceSection />
         <WorkSection />
         <ContactSection />
      </div>
   );
};

export default Home;
