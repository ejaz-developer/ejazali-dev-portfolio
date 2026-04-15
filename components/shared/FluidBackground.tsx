'use client';

import { useEffect, useRef } from 'react';

const FluidBackground = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const mouse = { x: width / 2, y: height / 2, active: false };
      const particles: Particle[] = [];
      const particleCount = 150;
      const connectionDistance = 120;

      class Particle {
         x: number;
         y: number;
         vx: number;
         vy: number;
         size: number;
         color: string;

         constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1.5; // Bigger, harder particles
            this.color = `rgba(150, 150, 150, 0.4)`; // Neutral, mechanical monochrome
         }

         update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            if (mouse.active) {
               const dx = mouse.x - this.x;
               const dy = mouse.y - this.y;
               const dist = Math.sqrt(dx * dx + dy * dy);
               if (dist < 200) {
                  const force = (200 - dist) / 200;
                  this.vx += dx * force * 0.015;
                  this.vy += dy * force * 0.015;
               }
            }

            this.vx *= 0.98;
            this.vy *= 0.98;
         }

         draw() {
            if (!ctx) return;
            // Brutalist square particles instead of round ones
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.size, this.size);
            ctx.fillStyle = this.color;
            ctx.fill();
         }
      }

      const init = () => {
         particles.length = 0;
         for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
         }
      };

      const drawConnections = () => {
         if (!ctx) return;
         for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
               const dx = particles[i].x - particles[j].x;
               const dy = particles[i].y - particles[j].y;
               const dist = Math.sqrt(dx * dx + dy * dy);

               if (dist < connectionDistance) {
                  const opacity = (1 - dist / connectionDistance) * 0.25; // Increase strength
                  ctx.beginPath();
                  ctx.moveTo(particles[i].x, particles[i].y);
                  ctx.lineTo(particles[j].x, particles[j].y);
                  ctx.strokeStyle = `rgba(128, 128, 128, ${opacity})`;
                  ctx.lineWidth = 1; // Thicker, more structural lines
                  ctx.stroke();
               }
            }
         }
      };

      const animate = () => {
         ctx.clearRect(0, 0, width, height);
         particles.forEach((p) => {
            p.update();
            p.draw();
         });
         drawConnections();
         requestAnimationFrame(animate);
      };

      const handleResize = () => {
         width = canvas.width = window.innerWidth;
         height = canvas.height = window.innerHeight;
         init();
      };

      const handleMove = (e: MouseEvent | TouchEvent) => {
         const clientX =
            'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
         const clientY =
            'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
         mouse.x = clientX;
         mouse.y = clientY;
         mouse.active = true;
      };

      const handleEnd = () => {
         mouse.active = false;
      };

      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', (e) => handleMove(e));
      window.addEventListener('mouseleave', handleEnd);

      window.addEventListener('touchmove', (e) => handleMove(e), {
         passive: true,
      });
      window.addEventListener('touchstart', (e) => handleMove(e), {
         passive: true,
      });
      window.addEventListener('touchend', handleEnd);

      init();
      animate();

      return () => {
         window.removeEventListener('resize', handleResize);
         window.removeEventListener('mousemove', (e) => handleMove(e));
         window.removeEventListener('mouseleave', handleEnd);
         window.removeEventListener('touchmove', (e) => handleMove(e));
         window.removeEventListener('touchstart', (e) => handleMove(e));
         window.removeEventListener('touchend', handleEnd);
      };
   }, []);

   return (
      <canvas
         ref={canvasRef}
         className="fixed top-0 left-0 w-full h-full -z-10 bg-transparent opacity-80 pointer-events-none hidden md:block"
      />
   );
};

export default FluidBackground;
