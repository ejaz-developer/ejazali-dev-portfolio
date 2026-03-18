'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
   const [isHovered, setIsHovered] = useState(false);
   const [clicked, setClicked] = useState(false);
   const cursorX = useMotionValue(-100);
   const cursorY = useMotionValue(-100);

   const springConfig = { damping: 30, stiffness: 500 };
   const cursorXSpring = useSpring(cursorX, springConfig);
   const cursorYSpring = useSpring(cursorY, springConfig);

   useEffect(() => {
      const moveCursor = (e: MouseEvent) => {
         cursorX.set(e.clientX);
         cursorY.set(e.clientY);
      };

      const handleMouseOver = (e: MouseEvent) => {
         const target = e.target as HTMLElement;
         const isPickable = !!(
            target.tagName === 'A' ||
            target.tagName === 'BUTTON' ||
            target.closest('button') ||
            target.closest('a') ||
            window.getComputedStyle(target).cursor === 'pointer'
         );

         setIsHovered(isPickable);
      };

      const handleMouseDown = () => setClicked(true);
      const handleMouseUp = () => setClicked(false);

      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mouseover', handleMouseOver);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
         window.removeEventListener('mousemove', moveCursor);
         window.removeEventListener('mouseover', handleMouseOver);
         window.removeEventListener('mousedown', handleMouseDown);
         window.removeEventListener('mouseup', handleMouseUp);
      };
   }, [cursorX, cursorY]);

   return (
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden hidden md:block">
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

         {/* Trailing Glow */}
         <motion.div
            className="absolute w-32 h-32 bg-blue-500/10 rounded-full blur-[40px]"
            style={{
               translateX: cursorXSpring,
               translateY: cursorYSpring,
               left: -64,
               top: -64,
            }}
         />
      </div>
   );
};

export default CustomCursor;
