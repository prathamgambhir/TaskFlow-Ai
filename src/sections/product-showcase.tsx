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
    <section className="bg-black text-white pt-14 pb-20 md:py-28 relative z-10" id="product">
      <div className="absolute -z-10 bg-linear-to-b from-black via-purple-700 to-black blur-[100px] w-full h-full"></div>
      <div className="flex flex-col gap-8 items-center ">
        <div className="text-center flex flex-col gap-2 md:gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-bold">Intutive Interface</h2>
          <p className="text-base max-w-xl font-extralight leading-relaxed text-gray-400 max-w-5/6 p-4">
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
            className="mt-4 md:mt-10 h-70 md:h-140 lg:h-180 w-auto"
            ref={imageRef}
          />
        </motion.div>
      </div>
    </section>
  );
}
