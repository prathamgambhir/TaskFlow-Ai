"use client";

import { Feature } from "@/sections/features";
import { useMotionTemplate, useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface FeatureCard {
  index: number;
  feature: Feature;
}

export const FeatureCard: React.FC<FeatureCard> = ({ feature, index }) => {
  const border = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${offsetX}px ${offsetY}px, black, transparent`;
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const borderPosition = border.current?.getBoundingClientRect();
      if (!borderPosition) return;
      offsetX.set(e.x - borderPosition?.x);
      offsetY.set(e.y - borderPosition?.y);
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      key={index}
      className={`bg-neutral-50 dark:bg-zinc-900/50 border border-neutral-200 dark:border-zinc-800 rounded-2xl p-8 text-center flex flex-col items-center relative ${
        feature.className || ""
      }`}
      ref={border}
    >
      <motion.div
        className="absolute inset-0 border-2 dark:border-purple-400 border-blue-600 rounded-2xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage
        }}
      ></motion.div>
      <div className="bg-white rounded-lg p-2 mb-6">{feature.icon}</div>
      <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
