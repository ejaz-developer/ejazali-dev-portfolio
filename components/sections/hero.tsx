"use client";

import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { contact } from "@/lib/site";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
 * Hero: a three.js wireframe grid terrain (monochrome lines on black) whose
 * surface lifts in soft waves around the cursor, with lime tracer accents on
 * the raised ridges and camera drift tied to scroll.
 *
 * The copy is plain DOM and is fully visible on first paint — the scene is
 * decoration and never a loading gate. When the visitor prefers reduced
 * motion the scene is not initialised at all and the CSS static backdrop
 * stands in. GSAP only moves `transform` on entrance, never opacity, so the
 * headline is never hidden while scripts load.
 */

const LIME = new THREE.Color(0xc6ff00);
const LINE = new THREE.Color(0x2e2e2e);

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
      });
    } catch {
      // WebGL unavailable — leave the static backdrop in place.
      return;
    }

    // --- Scene -------------------------------------------------------------
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060606, 0.075);

    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 1.35, 5.2);
    camera.lookAt(0, 0, 0);

    const geometry = new THREE.PlaneGeometry(18, 12, 44, 28);
    const base = Float32Array.from(
      geometry.getAttribute("position").array as Float32Array,
    );
    const positions = geometry.getAttribute("position");
    const colors = new THREE.BufferAttribute(
      new Float32Array(positions.count * 3),
      3,
    );
    geometry.setAttribute("color", colors);

    const material = new THREE.MeshBasicMaterial({
      wireframe: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -1.05;
    scene.add(terrain);

    // --- Sizing ------------------------------------------------------------
    const resize = () => {
      const width = canvas.clientWidth || 1;
      const height = canvas.clientHeight || 1;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();

    // --- Pointer -----------------------------------------------------------
    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };

    // --- Animation ---------------------------------------------------------
    const clock = new THREE.Clock();
    let frame = 0;
    let visible = true;
    let lastFrame = 0;

    // Colour channels hoisted out of the hot loop (no per-vertex allocation).
    const lineR = LINE.r;
    const lineG = LINE.g;
    const lineB = LINE.b;
    const limeR = LIME.r;
    const limeG = LIME.g;
    const limeB = LIME.b;

    const render = (now = 0) => {
      // Cap the scene at ~30fps; it is decoration, not gameplay.
      if (now - lastFrame < 33) {
        if (visible) frame = requestAnimationFrame(render);
        return;
      }
      lastFrame = now;

      const t = clock.getElapsedTime();
      const pos = positions.array as Float32Array;
      const col = colors.array as Float32Array;

      for (let i = 0; i < positions.count; i++) {
        const bx = base[i * 3];
        const by = base[i * 3 + 1];

        const wave =
          Math.sin(bx * 0.55 + t * 0.55) * 0.26 +
          Math.cos(by * 0.75 - t * 0.42) * 0.2;

        const dx = bx - pointer.x * 9;
        const dy = by - pointer.y * 6;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / 3.6);
        const lift = wave + influence * influence * 1.1;

        pos[i * 3 + 2] = lift;

        const lime = Math.min(
          1,
          influence * 1.6 + Math.max(0, lift) * 0.55,
        );
        col[i * 3] = lineR + (limeR - lineR) * lime;
        col[i * 3 + 1] = lineG + (limeG - lineG) * lime;
        col[i * 3 + 2] = lineB + (limeB - lineB) * lime;
      }

      positions.needsUpdate = true;
      colors.needsUpdate = true;

      terrain.position.y = Math.sin(t * 0.22) * 0.08;
      renderer.render(scene, camera);
      if (visible) frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    // Stop rendering while the hero is scrolled out of view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        const next = entry.isIntersecting;
        if (next && !visible) {
          visible = true;
          frame = requestAnimationFrame(render);
        } else if (!next) {
          visible = false;
          cancelAnimationFrame(frame);
        }
      },
      { rootMargin: "120px" },
    );
    observer.observe(section);

    // --- Motion ------------------------------------------------------------
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = copyRef.current?.querySelectorAll<HTMLElement>(
        "[data-hero-anim]",
      );
      if (items?.length) {
        gsap.from(items, {
          y: 26,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
        });
      }

      gsap.to(terrain.rotation, {
        x: "-=0.22",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, section);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      visible = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      ctx.revert();
      ScrollTrigger.refresh();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative isolate overflow-hidden"
    >
      {/* Copy — visible from first paint */}
      <div
        ref={copyRef}
        className="relative z-10 mx-auto flex min-h-[68vh] w-full max-w-[1000px] flex-col justify-center px-4 pt-8 pb-14 sm:min-h-[72vh] sm:px-6 sm:pt-24 sm:pb-16"
      >
        <h1
          data-hero-anim
          className="max-w-[24ch] font-display text-[clamp(2.1rem,5.2vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.03em] text-ink"
        >
          I build booking platforms and business web apps that remove manual
          work.
        </h1>

        <p
          data-hero-anim
          className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-ink-subtle"
        >
          Websites, booking systems, and internal tools for cleaning agencies
          and small service businesses — from what customers see to what runs
          behind the scenes.
        </p>

        <div
          data-hero-anim
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#contact" className="btn-solid">
            Start your project
            <ArrowRight size={15} />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-[3px] border border-rule px-5 py-[0.7rem] text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-bg-2"
          >
            See selected work
            <ArrowUpRight size={15} />
          </a>
        </div>

        <p
          data-hero-anim
          className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft"
        >
          Or email{" "}
          <a
            href={`mailto:${contact.email}`}
            className="text-ink-subtle underline decoration-rule underline-offset-4 transition-colors hover:text-teal"
          >
            {contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}