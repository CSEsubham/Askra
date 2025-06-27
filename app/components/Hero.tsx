"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    const heroSplit = new SplitText("#title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText("#content", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
      .to(".arrow", { y: 100 }, 0);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="absolute inset-0 size-full bg-[url('/baggg.png')] bg-cover bg-center pt-32 sm:pt-0"
      >
        <h1
          id="title"
          className="md:mt-32 mt-40 text-8xl md:text-[10vw] leading-none text-center font-modern-negra"
        >
          ASKRA
        </h1>
        <div
          id="content"
          className="text-center text-2xl md:text-3xl mt-5 md:mt-10 text-gray-200 font-modern-negra"
        >
          <p>
            Your AI Coding Companion
            <br />
            Powered by LangChain and Real Code Intelligence
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 mt-12 flex-col sm:flex-row">
          <Link
            href="/login"
            className="border px-5 py-3 rounded-full text-2xl font-serif text-nowrap hover:bg-white hover:text-black transition duration-300"
            id="ani-try"
          >
            Try Now
          </Link>

          <Link
            href="/docs"
            className="border px-5 py-3 rounded-full text-2xl font-serif text-nowrap hover:bg-white hover:text-black transition duration-300"
            id="ani-learn"
          >
            Learn More
          </Link>

          <Link
            href="https://github.com/CSEsubham/Askra"
            className="border px-5 py-3 rounded-full text-2xl font-serif text-nowrap hover:bg-white hover:text-black transition duration-300"
            id="ani-git"
            target="_blank"
          >
            Code Link
          </Link>
        </div>
        <Image
          src="/left.png"
          alt="Leaf"
          id='left-leaf'
   width={200} height={200}
          className="absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20 md:w-fit w-1/3"
        />
        <Image
          src="/right.png"
          alt="Leaf"
          width={200} height={200}  
          id="right-leaf" 
          className="absolute right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-fit w-24"
          />               
      </section>
    </>
  );
}
