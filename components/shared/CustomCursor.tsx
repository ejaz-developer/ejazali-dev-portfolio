'use client';

import {
   AnimatePresence,
   motion,
   useMotionValue,
   useSpring,
} from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
   const [isHovered, setIsHovered] = useState(false);
   const [clicked, setClicked] = useState(false);
   const [isVisible, setIsVisible] = useState(false);
   const [HUDText, setHUDText] = useState('SYS.IDLE');

   const cursorX = useMotionValue(-100);
   const cursorY = useMotionValue(-100);

   // Fast primary tracker
   const fastSpring = { damping: 30, stiffness: 800 };
   const fastX = useSpring(cursorX, fastSpring);
   const fastY = useSpring(cursorY, fastSpring);

   // Delayed tactical reticle giving a heavy, gamified "target locking" drag
   const slowSpring = { damping: 20, stiffness: 150 };
   const slowX = useSpring(cursorX, slowSpring);
   const slowY = useSpring(cursorY, slowSpring);

   useEffect(() => {
      let moveTimer: NodeJS.Timeout;

      // General Move Handler
      const handleMove = (e: MouseEvent | TouchEvent) => {
         const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
         const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

         cursorX.set(clientX);
         cursorY.set(clientY);

         if (!isVisible) setIsVisible(true);

         if (!isHovered) {
            setHUDText('TRACKING...');
            clearTimeout(moveTimer);
            moveTimer = setTimeout(() => setHUDText('SYS.IDLE'), 150);
         }
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
         if (isInteractable) {
            setHUDText('TGT.LOCKED');
         } else {
            setHUDText('SYS.IDLE');
         }
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

      // Touch Events
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
         clearTimeout(moveTimer);
         window.removeEventListener('mousemove', handleMove);
         window.removeEventListener(
            'mouseover',
            handleInteraction as (e: Event) => void
         );
         window.removeEventListener('mousedown', handlePressStart);
         window.removeEventListener('mouseup', handlePressEnd);
         window.removeEventListener('mouseleave', handleLeave);
         window.removeEventListener('touchmove', handleMove);
         window.removeEventListener(
            'touchstart',
            handleMove as (e: Event) => void
         );
         window.removeEventListener('touchend', handlePressEnd);
         window.removeEventListener('touchcancel', handlePressEnd);
      };
   }, [cursorX, cursorY, isVisible, isHovered]);

   if (!isVisible) return null;

   return (
      <div className="fixed inset-0 pointer-events-none z-100 overflow-hidden mix-blend-difference hidden md:block">
         {/* Gamified HUD Display (Slow Tracking) */}
         <motion.div
            className="absolute flex flex-col gap-1 items-start"
            style={{
               translateX: slowX,
               translateY: slowY,
               left: 20,
               top: 20,
            }}
         >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white whitespace-nowrap bg-black/50 px-1 py-0.5 border border-white/20">
               {HUDText}
            </span>
            {isHovered && (
               <span className="text-[8px] font-mono text-white/70 bg-black/50 px-1 border border-white/10 uppercase animate-pulse">
                  Engage Target
               </span>
            )}
         </motion.div>

         {/* Outer Delayed Reticle (Simulates Heavy Mech Tracking) */}
         <motion.div
            className="absolute w-14 h-14 border border-white/40 rounded-none flex items-center justify-center transition-opacity"
            style={{
               translateX: slowX,
               translateY: slowY,
               left: -28,
               top: -28,
               scale: isHovered ? 1.3 : clicked ? 1.5 : 1,
               rotate: isHovered ? 45 : 0,
               opacity: clicked ? 0 : 1,
            }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
         >
            {/* Tactical Corner Brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white transition-all transform -translate-x-1 -translate-y-1" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2der-r-[2px] border-white transition-all transform translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white transition-all transform -translate-x-1 translate-y-1" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white transition-all transform translate-x-1 translate-y-1" />
         </motion.div>

         {/* Inner Fast Crosshair */}
         <motion.div
            className="absolute w-6 h-6 rounded-none flex items-center justify-center transition-opacity"
            style={{
               translateX: fastX,
               translateY: fastY,
               left: -12,
               top: -12,
               scale: clicked ? 0.7 : isHovered ? 0 : 1,
            }}
         >
            {/* Target Crosshair lines */}
            <div className="absolute w-[200%] h-0.5 bg-white opacity-70" />
            <div className="absolute h-[200%] w-0.5 bg-white opacity-70" />
         </motion.div>

         {/* Core Point Box */}
         <motion.div
            className="absolute w-2.5 h-2.5 bg-white border border-black rounded-none"
            style={{
               translateX: fastX,
               translateY: fastY,
               left: -5,
               top: -5,
               scale: clicked ? 0.5 : isHovered ? 1.5 : 1,
            }}
         />
      </div>
   );
};

export default CustomCursor;
