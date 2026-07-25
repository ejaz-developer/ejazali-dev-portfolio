"use client";

import { experience } from "@/data/data";
import SplitText from "@/components/reactbits/SplitText";
import LineSidebar from "@/components/reactbits/LineSidebar";
import DotField from "@/components/reactbits/DotField";
import { useState } from "react";

const experienceLabels = experience.map((e) => e.company);

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 py-24 overflow-hidden"
    >
      <DotField
        gradientFrom="rgba(168, 85, 247, 0.35)"
        gradientTo="rgba(217, 70, 239, 0.15)"
        glowColor="#0c0c12"
        dotRadius={1.5}
        dotSpacing={20}
        bulgeStrength={45}
        cursorRadius={280}
      />

      <div className="relative z-10 max-w-4xl w-full">
        <SplitText
          text="Experience"
          tag="h2"
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4"
          textAlign="center"
          splitType="chars"
          delay={40}
          duration={0.8}
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
        />

        <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-accent-2 mx-auto mb-12 rounded-full" />

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:w-64 shrink-0">
            <LineSidebar
              items={experienceLabels}
              accentColor="#a855f7"
              textColor="#8a8a9a"
              markerColor="#2a2a3a"
              showIndex
              showMarker
              markerLength={80}
              markerGap={16}
              proximityRadius={100}
              maxShift={20}
              defaultActive={0}
              fontSize={1}
              onItemClick={(index) => setActiveExp(index)}
            />
          </div>

          <div className="flex-1 min-w-0">
            {experience.map((exp, i) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className={`transition-all duration-500 ${
                  i === activeExp
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 hidden"
                }`}
              >
                {i === activeExp && (
                  <div className="p-8 rounded-2xl bg-surface/60 border border-border/50 backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <h3 className="text-xl font-medium text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-accent mt-1">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted whitespace-nowrap px-3 py-1 rounded-full bg-white/5">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted/80 leading-relaxed mt-4 mb-5">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
