"use client";

import Link from 'next/link';
import React from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import ShortcutIcon from '@mui/icons-material/Shortcut';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function NavBar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: '#nav',
        start: 'bottom top',
        end: 'top top',
        scrub: true,
      },
    });

    navTween.fromTo(
      '#nav',
      { backgroundColor: 'transparent'},
     
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 1,
        
        ease: 'power1.inOut',
      }
    );
  });

  return (
    <div className="fixed z-50 w-full" id="nav">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 px-5 container mx-auto">
        <div className="flex items-center gap-2">
          <AutoAwesomeIcon className="text-white" />
          <Link href="/" className="cursor-pointer text-nowrap md:text-base text-sm font-modern-negra">ASKRA</Link>
        </div>

        <div className="flex items-center gap-5 md:gap-10">
          <Link href="/" className="cursor-pointer text-nowrap md:text-base text-sm hover:border px-3 py-2 hover:bg-[#f3f4f1] hover:text-[#1a1a1a] transition-all duration-200">
            Home
          </Link>
          <Link href="/Chatbot" className="cursor-pointer text-nowrap md:text-base text-sm hover:border px-3 py-2 hover:bg-[#f3f4f1] hover:text-[#1a1a1a] transition-all duration-200">
            ChatBot
          </Link>
          <Link href="/contact" className="cursor-pointer text-nowrap md:text-base text-sm hover:border px-3 py-2 hover:bg-[#f3f4f1] hover:text-[#1a1a1a] transition-all duration-200">
            Docs
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/login" className="border px-3 py-2 animation-tryout">
            <ShortcutIcon className="text-white" />
            TryNow
          </Link>
        </div>
      </div>
    </div>
  );
}
