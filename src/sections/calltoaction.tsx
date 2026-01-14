"use client";

import HelixImage from "@/assets/images/helix2.png";
import EmojisterImage from "@/assets/images/emojistar.png";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

export default function CallToAction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const translateYParallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <section className="dark:bg-black bg-white w-full py-28 md:py-40 lg:py-44 px-6 overflow-clip">
      <div
        className="w-3/4 max-w-3xl h-full mx-auto text-center relative z-1"
        ref={containerRef}
      >
        <motion.div
          style={{
            y: translateYParallax
          }}
          className="absolute -top-22 left-[calc(-100%+60%)] hidden md:inline"
        >
          <Image
            src={EmojisterImage}
            alt="Imojister Image"
          />
        </motion.div>
        <motion.div 
        style={{
          y: translateYParallax
        }}
        className="absolute -bottom-32 right-[calc(-100%+60%)] hidden md:inline z-10"
        >
          <Image
            src={HelixImage}
            alt="Helix Image"
          />
        </motion.div>
        <div className="absolute -z-10 dark:bg-linear-to-b dark:from-black dark:via-purple-700 dark:to-black bg-linear-to-b from-white via-blue-400 to-white blur-[100px] w-full h-full"></div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 dark:text-white text-slate-900">
          Get instant access
        </h2>

        <p className="dark:text-gray-400 text-slate-600 max-w-3xl text-lg md:text-xl leading-relaxed mb-10 mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>

        <form className="flex flex-col gap-3 w-full mx-auto max-w-3xl md:max-w-xl md:flex-row md:items-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full dark:bg-zinc-800 bg-white border dark:border-zinc-700 border-slate-200 rounded-lg py-3 px-4 dark:text-white text-slate-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-400/50 dark:focus:ring-white/80 outline-none"
          />

          <button
            type="submit"
            className="w-full lg:max-w-48 md:max-w-36 dark:bg-purple-700 bg-blue-500 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-purple-800 transition-colors"
          >
            Get access
          </button>
        </form>
      </div>
    </section>
  );
}
