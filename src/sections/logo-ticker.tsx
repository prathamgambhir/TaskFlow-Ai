"use client";

import AcmeLogo from "@/assets/images/acme.png";
import ApexLogo from "@/assets/images/apex.png";
import CelestialLogo from "@/assets/images/celestial.png";
import QuantumLogo from "@/assets/images/quantum.png";
import EchoLogo from "@/assets/images/echo.png";
import PulseLogo from "@/assets/images/pulse.png";
import Image, { StaticImageData } from "next/image";
import { easeInOut, motion } from "motion/react";

const images: { src: StaticImageData; alt: string }[] = [
  { src: AcmeLogo, alt: "Acme Logo" },
  { src: ApexLogo, alt: "Apex Logo" },
  { src: CelestialLogo, alt: "Celestial Logo" },
  { src: QuantumLogo, alt: "Quantum Logo" },
  { src: EchoLogo, alt: "Echo Logo" },
  { src: PulseLogo, alt: "Pulse Logo" },
];

export default function LogoTicker() {
  return (
    <section>
      <div className="dark:bg-black bg-white text-white dark:text-white text-slate-900 flex flex-col gap-12 md:gap-14 lg:gap-16 items-center py-10">
        <h2 className="text-sm lg:text-base font-medium dark:text-white/60 text-slate-500">
          Trusted by the world's most innovative teams
        </h2>
        <div className="flex overflow-hidden w-full h-auto mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
          <motion.div
            className="flex flex-none gap-16 md:gap-20 lg:gap-24 pr-16 md:pr-20 lg:pr-24"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[...images, ...images].map((image, idx) => (
              <Image
                src={image.src}
                alt={image.alt}
                key={idx}
                className="flex-none h-8 md:h-10 w-auto dark:invert invert-0"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
