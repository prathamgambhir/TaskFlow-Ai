"use client";

import Image from "next/image";
import ProductScreenshot from "@/assets/images/app-screen.png";
import { useRef } from "react";
import { useScroll, motion, useTransform, easeInOut } from "motion/react";
import {
  containerVariants,
  itemVariants,
} from "@/components/stagger-animations";

export default function ProductShowcase() {
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [30, 15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.8, 1]);

  return (
    <section
      className="dark:bg-black bg-white pt-14 pb-20 md:py-28 relative z-10"
      id="product"
    >
      <div className="absolute -z-10 dark:bg-linear-to-b dark:from-black dark:via-purple-700 dark:to-black bg-linear-to-b from-white via-blue-400 to-white blur-[100px] w-full h-full"></div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-8 items-center "
      >
        <motion.div
          variants={containerVariants}
          className="text-center flex flex-col gap-2 md:gap-8 items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold dark:text-white text-slate-900"
          >
            Intutive Interface
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base max-w-xl font-extralight leading-relaxed dark:text-gray-400 text-slate-600 max-w-5/6 p-4"
          >
            Celebrate the joy of accomplishment with an app designed to track
            your progress, progress, motivate your efforts, and celebrate your
            successes, one task at a time.
          </motion.p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          style={{
            rotateX: rotateX,
            opacity: opacity,
            transformPerspective: "1200px",
          }}
        >
          <Image
            src={ProductScreenshot}
            alt="Product Screenshot"
            className="mt-4 md:mt-10 h-70 md:h-140 lg:h-180 w-auto invert dark:invert-5"
            ref={imageRef}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
