"use client";

import { projects } from "@/data/data";
import { motion } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";
import SplitText from "@/components/reactbits/SplitText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import GridScan from "@/components/reactbits/GridScan";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <GridScan
          lineThickness={0.8}
          linesColor="#2a1f3a"
          scanColor="#a855f7"
          scanOpacity={0.3}
          gridScale={0.12}
          lineStyle="dashed"
          lineJitter={0.15}
          scanDirection="pingpong"
          scanDuration={3}
          scanDelay={1.5}
          scanGlow={0.6}
          scanSoftness={2.5}
          bloomIntensity={0.15}
          chromaticAberration={0.001}
          noiseIntensity={0.008}
          scanOnClick
          enablePost
          enableWebcam={false}
        />
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <SplitText
          text="Projects"
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

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <SpotlightCard
                className="w-full"
                spotlightColor="rgba(168, 85, 247, 0.08)"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-medium text-foreground">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted/80 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-3 py-1 rounded-full bg-white/5 text-muted border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex sm:flex-col gap-2 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-muted hover:text-foreground hover:bg-white/10 hover:border-accent/30 transition-all duration-200"
                    >
                      <Github size={14} />
                      Source
                    </a>
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-all duration-200"
                    >
                      Live
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
