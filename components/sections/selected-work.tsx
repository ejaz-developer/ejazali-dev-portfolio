import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/data";
import { statusTone } from "@/lib/site";
import { pad2 } from "@/lib/utils";
import { ScreenshotFrame, Stamp, TicketNo } from "@/components/primitives";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";

export default function SelectedWork() {
  const roster = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="work" className="scroll-mt-24">
      <SectionHeading
        index="03"
        title="Selected work"
        lede="Four products I have designed and built end to end. Status labels are current and every demo below resolves."
      />

      <div className="mt-10 space-y-10">
        {roster.map((project, i) => (
          <Reveal key={project.slug}>
            <article className="group grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-start lg:gap-10">
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-4">
                  <TicketNo value={`NO. ${pad2(i + 1)}`} />
                  <Stamp tone={statusTone(project.status)}>
                    {project.status}
                  </Stamp>
                </div>

                <h3 className="mt-4">
                  <Link
                    href={`/work/${project.slug}`}
                    className="font-display text-[clamp(1.6rem,3.4vw,2.15rem)] leading-[1.05] tracking-[-0.015em] text-ink transition-colors hover:text-teal"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="mt-3 max-w-[54ch] text-[15px] leading-[1.7] text-ink/75">
                  {project.summary}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <li
                      key={tag}
                      className="mono-label rounded-[2px] border border-rule bg-paper-2 px-2 py-1"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <Link
                    href={`/work/${project.slug}`}
                    className="link-underline inline-flex items-center gap-1.5 text-[13px] font-medium text-ink"
                  >
                    Read the case study
                    <ArrowRight size={14} />
                  </Link>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-1.5 text-[13px] font-medium text-ink"
                    >
                      Live demo
                      <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>
              </div>

              <ScreenshotFrame
                ticket={`NO. ${pad2(i + 1)}`}
                caption={`${project.title} — ${project.status}`}
                className="lg:sticky lg:top-24"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink/[0.04]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </ScreenshotFrame>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
