'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
   const [isHovered, setIsHovered] = useState(false);
   const [clicked, setClicked] = useState(false);
   const [isVisible, setIsVisible] = useState(false);

   const cursorX = useMotionValue(-100);
   const cursorY = useMotionValue(-100);

   const springConfig = { damping: 40, stiffness: 600 };
   const cursorXSpring = useSpring(cursorX, springConfig);
   const cursorYSpring = useSpring(cursorY, springConfig);

   useEffect(() => {
      // General Move Handler (Mouse or Touch)
      const handleMove = (e: MouseEvent | TouchEvent) => {
         const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
         const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

         cursorX.set(clientX);
         cursorY.set(clientY);

         if (!isVisible) setIsVisible(true);
      };

      // Hover Detection for Interactables
      const handleInteraction = (e: MouseEvent | TouchEvent) => {
         const target = e.target as HTMLElement;
         const isInteractable = !!(
            target.tagName === 'A' ||
            target.tagName === 'BUTTON' ||
            target.closest('button') ||
            target.closest('a') ||
            (target instanceof HTMLElement &&
               window.getComputedStyle(target).cursor === 'pointer')
         );

         setIsHovered(isInteractable);
      };

      // Press Events
      const handlePressStart = () => setClicked(true);
      const handlePressEnd = () => setClicked(false);
      const handleLeave = () => setIsVisible(false);

      // Web Events
      window.addEventListener('mousemove', handleMove);
      window.addEventListener(
         'mouseover',
         handleInteraction as (e: Event) => void
      );
      window.addEventListener('mousedown', handlePressStart);
      window.addEventListener('mouseup', handlePressEnd);
      window.addEventListener('mouseleave', handleLeave);

      // Mobile/Touch Events
      window.addEventListener('touchmove', handleMove, { passive: true });
      window.addEventListener(
         'touchstart',
         (e) => {
            handleMove(e);
            handlePressStart();
            handleInteraction(e);
         },
         { passive: true }
      );
      window.addEventListener('touchend', handlePressEnd);
      window.addEventListener('touchcancel', handlePressEnd);

      return () => {
         // Cleanup Web
         window.removeEventListener('mousemove', handleMove);
         window.removeEventListener(
            'mouseover',
            handleInteraction as (e: Event) => void
         );
         window.removeEventListener('mousedown', handlePressStart);
         window.removeEventListener('mouseup', handlePressEnd);
         window.removeEventListener('mouseleave', handleLeave);

         // Cleanup Touch
         window.removeEventListener('touchmove', handleMove);
         window.removeEventListener(
            'touchstart',
            handleMove as (e: Event) => void
         );
         window.removeEventListener('touchend', handlePressEnd);
         window.removeEventListener('touchcancel', handlePressEnd);
      };
   }, [cursorX, cursorY, isVisible]);

   if (!isVisible) return null;

   return (
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
         {/* Outer Ring */}
         <motion.div
            className="absolute w-10 h-10 border-2 border-blue-500 rounded-full"
            style={{
               translateX: cursorXSpring,
               translateY: cursorYSpring,
               left: -20,
               top: -20,
               scale: isHovered ? 1.5 : clicked ? 0.8 : 1,
               opacity: isHovered ? 0.5 : 0.3,
            }}
         />

         {/* Inner Dot */}
         <motion.div
            className="absolute w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
            style={{
               translateX: cursorX,
               translateY: cursorY,
               left: -4,
               top: -4,
               scale: clicked ? 1.5 : 1,
            }}
         />

         {/* Trailing Glow - Optimized for performance */}
         <motion.div
            className="absolute w-24 h-24 bg-blue-400/10 rounded-full blur-[30px]"
            style={{
               translateX: cursorXSpring,
               translateY: cursorYSpring,
               left: -48,
               top: -48,
            }}
         />
      </div>
   );
};

export default CustomCursor;
