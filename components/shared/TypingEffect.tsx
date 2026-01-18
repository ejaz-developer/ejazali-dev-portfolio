'use client';

import { useEffect, useState } from 'react';

interface TypingEffectProps {
   phrases: string[];
   typingSpeed?: number;
   deletingSpeed?: number;
   pauseDuration?: number;
   className?: string;
}

export default function TypingEffect({
   phrases,
   typingSpeed = 100,
   deletingSpeed = 50,
   pauseDuration = 2000,
   className = '',
}: TypingEffectProps) {
   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
   const [currentText, setCurrentText] = useState('');
   const [isDeleting, setIsDeleting] = useState(false);
   const [isPaused, setIsPaused] = useState(false);

   useEffect(() => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isPaused) {
         const pauseTimeout = setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
         }, pauseDuration);
         return () => clearTimeout(pauseTimeout);
      }

      if (!isDeleting && currentText === currentPhrase) {
         // eslint-disable-next-line react-hooks/set-state-in-effect
         setIsPaused(true);
         return;
      }

      if (isDeleting && currentText === '') {
         setIsDeleting(false);
         setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
         return;
      }

      const timeout = setTimeout(
         () => {
            if (isDeleting) {
               setCurrentText((prev) => prev.slice(0, -1));
            } else {
               setCurrentText((prev) =>
                  currentPhrase.slice(0, prev.length + 1)
               );
            }
         },
         isDeleting ? deletingSpeed : typingSpeed
      );

      return () => clearTimeout(timeout);
   }, [
      currentText,
      isDeleting,
      isPaused,
      currentPhraseIndex,
      phrases,
      typingSpeed,
      deletingSpeed,
      pauseDuration,
   ]);

   return (
      <span className={className}>
         {currentText}
         <span className="animate-pulse">|</span>
      </span>
   );
}
