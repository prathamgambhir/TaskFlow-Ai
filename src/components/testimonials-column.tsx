import { testimonials } from "@/sections/testimonials";
import Image from "next/image";
import { motion } from "motion/react";

export default function TestimonialsColumn(props: {
  classname?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) {
  return (
    <div className={props.classname}>
      <motion.div
        animate={{translateY: "-50%"}}
        transition={{duration: props.duration, repeat: Infinity, repeatType:"loop", ease: "linear"}}
        className="flex flex-col overflow-hidden"
      >
        {[...props.testimonials, ...props.testimonials].map(
          ({ name, imageSrc, text, username }, idx) => (
            <div
              key={idx}
              className="max-w-xl border border-purple-400/20 bg-[#161616] shadow-purple-400 shadow-sm/50 rounded-2xl p-6 mb-8"
            >
              <div>{text}</div>
              <div className="flex gap-2 items-center pt-6 ">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={20}
                  height={20}
                  className="size-10 rounded-full"
                />
                <div className="flex flex-col ">
                  <div className="text-base/snug tracking-tight font-light ">
                    {name}
                  </div>
                  <div className="text-sm tracking-tight font-light text-white/60 ">
                    {username}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}
