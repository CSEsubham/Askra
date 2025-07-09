'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import localFont from 'next/font/local';

gsap.registerPlugin(useGSAP);

// Custom font
const titleFont = localFont({
  src: '../fonts/Almendra-BoldItalic.ttf',
  variable: '--font-titleLg',
  display: 'swap',
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useGSAP(() => {
    if (open) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.8,
        ease: 'power4.out',
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: '100%',
        duration: 0.7,
        ease: 'power4.inOut',
      });
    }
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 z-50 bg-transparent">

        <Image
          src="/title.png"
          alt="Logo"
          width={70}
          height={70}
          className="object-contain"
          priority
        />

        {/* Hamburger */}
        {!open && (
          <div
            onClick={() => setOpen(true)}
            className="rounded-full bg-white/10 border-2 border-black p-2 hover:scale-110 transition-transform cursor-pointer group backdrop-blur-md"
          >
            <RxHamburgerMenu className="text-black group-hover:text-purple-500 w-6 h-6 transition-colors" />
          </div>
        )}
      </nav>

      {/* SIDEBAR */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 translate-x-full z-[999] h-screen w-screen sm:w-[450px]
        bg-black text-white shadow-2xl px-8 pt-8 pb-10
        sm:rounded-l-[250px] flex flex-col justify-between
        transition-all duration-700 ease-in-out ${titleFont.className}`}
      >
        {/* Close Icon */}
        <div className="flex justify-end">
          <RxCross1
            className="w-6 h-6 text-white cursor-pointer hover:rotate-90 transition-transform"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Links */}
        <ul className="mt-12 space-y-8 text-2xl font-semibold flex flex-col items-start sm:pl-6">
          {['Home', 'Docs', 'About Us'].map((text, i) => (
            <li key={text} className="relative group">
              <Link
                href={text === 'Home' ? '/' : `/${text.toLowerCase().replace(' ', '')}`}
                className="hover:text-purple-400 transition-all"
              >
                {text}
              </Link>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></div>
            </li>
          ))}
        </ul>

        {/* Try Now Button */}
        <div className="sm:pl-6">
          <Link
            href="/try"
            className="inline-block mx-25 mb-20 bg-white text-black py-3 px-8 rounded-full hover:bg-purple-500 hover:text-white font-bold text-lg transition-all shadow-lg hover:scale-105"
          >
            Try Now
          </Link>
        </div>
      </div>
    </>
  );
}
