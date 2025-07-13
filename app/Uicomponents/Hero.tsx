'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });

      gsap.from('.hero-desc', {
        y: 20,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from('.hero-btn', {
        opacity: 0,
        scale: 0.95,
        delay: 0.6,
        duration: 1,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.75)',
      });

      gsap.from('.hero-img', {
        y: 60,
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={heroRef}
      className="relative bg-gradient-to-br from-white via-purple-50 to-purple-100 overflow-hidden"
    >
      {/* Background SVG Glow */}
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-purple-300 opacity-30 blur-[200px] z-0 rounded-full" />

      {/* Hero Content */}
      <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-24">
        {/* Text Left */}
        <div className="max-w-xl flex flex-col gap-6">
          <p className="text-lg text-purple-600">Hi,There!</p>
          <h1 className="hero-title text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            <span className="text-purple-700 drop-shadow-md">ASKRA</span> <br />
            your AI coding companion.
          </h1>
          <p className="hero-desc text-lg text-gray-700 max-w-md">
            Askra helps you solve, debug, and explore code. Powered by AI, trained for developers like you.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <Link
              href="/auth"
              className=" flex items-center gap-2 px-5 py-3 bg-purple-700 text-white font-medium rounded-full shadow-md hover:bg-purple-800 transition-all duration-300 group"
            >
              Try Askra
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="https://github.com/CSEsubham/Askra"
              target="_blank"
              className=" flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-800 rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              GitHub
              <FaGithub />
            </Link>
          </div>
        </div>

        {/* Image Right */}
        <div className="hero-img w-full max-w-md mt-12 md:mt-0">
          <Image
            src="/chatbot.svg"
            alt="Askra Chatbot"
            width={500}
            height={500}
            className="w-full h-auto rounded-3xl shadow-2xl"
          />
        </div>
      </section>
    </main>
  );
}
