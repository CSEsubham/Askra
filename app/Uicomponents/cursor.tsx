'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: 'power3.out',
        });
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="block fixed top-0 left-0 z-[100] w-6 h-6 rounded-full border border-purple-400 pointer-events-none mix-blend-difference"
    />
  );
}
