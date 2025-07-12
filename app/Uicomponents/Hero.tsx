'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Lottie from 'lottie-react';
import localFont from 'next/font/local';
import botAnimation from '@/public/lottie/askra-bot.json';
import sparkles from '@/public/lottie/sparkles.json';
import loadingAnimation from '@/public/lottie/loading-askra.json';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const titleFont = localFont({
  src: '../fonts/ManufacturingConsent-Regular.ttf',
  variable: '--font-title-lg',
  display: 'swap'
});

const subtitleFont = localFont({
  src: '../fonts/Almendra-BoldItalic.ttf',
  variable: '--font-subtitle',
  display: 'swap'
});

// Load Three.js stars dynamically (make sure `Stars.tsx` exists in /components)
const Stars = dynamic(() => import('../components/Stars'), { ssr: false });

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const cursorRef = useRef(null);
  const svgPathRef = useRef(null);
  const [subtitle, setSubtitle] = useState('');
  const [subtitle2, setSubtitle2] = useState('');

  const typingText =
    'Askra is your AI sidekick for real-time coding help. Ask anything related to code, errors, or ideas—Askra is always ready.Built by Saran, Subham & Kiran @ GVP to help you fix & learn code instantly';

  useEffect(() => {
    import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
      const scrollEl = document.querySelector('[data-scroll-container]');
      if (scrollEl) {
        const scroll = new LocomotiveScroll({ el: scrollEl, smooth: true });
        return () => scroll.destroy();
      }
    });

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      });
      gsap.from(buttonRef.current, {
        y: 40,
        opacity: 0,
        delay: 0.6,
        duration: 0.8,
        ease: 'power3.out'
      });
      gsap.from(svgPathRef.current, {
        drawSVG: '0%',
        duration: 2,
        delay: 1.2,
        ease: 'power2.out'
      });
    }, heroRef);

    // Typing effect
    let i = 0;
    const type = () => {
      if (i < typingText.length) {
        setSubtitle((prev) => prev + typingText.charAt(i));
        i++;
        setTimeout(type, 30);
      }
    };
    type();

    // Custom Cursor
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: 'power3.out'
        });
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      data-scroll-container
      className="relative h-screen overflow-hidden bg-[#fefefe] text-black font-sans cursor-none"
    >
      {/* Parallax Stars */}
     

      {/* Sparkle Background */}
      <Lottie
        animationData={sparkles}
        loop
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-50"
      />

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 z-[100] w-6 h-6 rounded-full border border-purple-400 pointer-events-none mix-blend-difference"
      />

      {/* Gradient Background & Glow */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backpic.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-purple-100/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-32 space-y-6 max-w-4xl">
        <div className="relative">
          <div className="absolute inset-0 z-0 blur-3xl opacity-40 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 animate-pulse" />
          <h1
            ref={titleRef}
            className={`relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-black to-purple-700 drop-shadow-xl ${titleFont.className}`}
          >
            Askra
          </h1>
        </div>

        <p
          className={`text-lg md:text-xl text-purple-900 max-w-2xl leading-relaxed ${subtitleFont.className}`}
        >
          {subtitle}
        </p>

        {/* SVG Path Animation */}
        <svg viewBox="0 0 400 100" className="w-full max-w-sm absolute -bottom-4 z-[-10] opacity-70">
          <path
            ref={svgPathRef}
            d="M10,80 C40,10 80,10 110,80 S180,150 210,80"
            stroke="#6B21A8"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Contact Us Button */}
        <div ref={buttonRef} className="relative group inline-block">
          <button className="px-8 py-3 text-lg font-semibold bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 cursor-pointer">
            Contact Us
          </button>
          <div className="absolute top-full mt-2 left-0 w-48 bg-white text-black p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-auto transition-opacity duration-300 z-20">
            <a
              href="mailto:subham@example.com"
              className="block hover:text-purple-600 mb-1"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/subham-kumar-8048052a7/"
              target="_blank"
              className="block hover:text-purple-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Lottie Bot Animation */}
      <div className="absolute bottom-12 right-12 w-[150px] h-[150px]">
        <Lottie animationData={botAnimation} loop />
      </div>

      {/* Floating Chat CTA Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full shadow-lg animate-bounce transition-transform duration-300 hover:scale-110 cursor-pointer">
          💬 Chat with Askra
        </button>
      </div>
    </section>
  );
}
