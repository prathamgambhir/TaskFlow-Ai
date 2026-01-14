"use client";

import Image from "next/image";
import ProductScreenshot from "@/assets/images/app-screen.png";
import { useRef } from "react";
import { useScroll, motion, useTransform, easeInOut } from "motion/react";

export default function ProductShowcase() {
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"]
  });

  const rotateX = useTransform(scrollYProgress, [0,0.5,1], [30,15,0]);
  const opacity = useTransform(scrollYProgress, [0,0.5,1], [0.5,0.8,1]);

  return (
    <section className="dark:bg-black bg-white pt-14 pb-20 md:py-28 relative z-10" id="product">
      <div className="absolute -z-10 dark:bg-linear-to-b dark:from-black dark:via-purple-700 dark:to-black bg-linear-to-b from-white via-blue-400 to-white blur-[100px] w-full h-full"></div>
      <div className="flex flex-col gap-8 items-center ">
        <div className="text-center flex flex-col gap-2 md:gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-900">Intutive Interface</h2>
          <p className="text-base max-w-xl font-extralight leading-relaxed dark:text-gray-400 text-slate-600 max-w-5/6 p-4">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, progress, motivate your efforts, and celebrate your
            successes, one task at a time.
          </p>
        </div>
        <motion.div
          style={{
            rotateX : rotateX,
            opacity: opacity,
            transformPerspective: "1200px",//provides the deapth so that it can rotate inside the screen like in 3D
          }}
        >
          <Image
            src={ProductScreenshot}
            alt="Product Screenshot"
            className="mt-4 md:mt-10 h-70 md:h-140 lg:h-180 w-auto invert dark:invert-5"
            ref={imageRef}
          />
        </motion.div>
      </div>
    </section>
  );
}
