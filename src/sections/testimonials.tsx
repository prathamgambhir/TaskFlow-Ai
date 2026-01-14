"use client";

import Avatar1 from "@/assets/images/avatar-1.png";
import Avatar2 from "@/assets/images/avatar-2.png";
import Avatar3 from "@/assets/images/avatar-3.png";
import Avatar4 from "@/assets/images/avatar-4.png";
import Avatar5 from "@/assets/images/avatar-5.png";
import Avatar6 from "@/assets/images/avatar-6.png";
import Avatar7 from "@/assets/images/avatar-7.png";
import Avatar8 from "@/assets/images/avatar-8.png";
import Avatar9 from "@/assets/images/avatar-9.png";
import TestimonialsColumn from "@/components/testimonials-column";
import { motion } from "motion/react";
import {
  containerVariants,
  itemVariants,
} from "@/components/stagger-animations";

export const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, this platform has become an essential part of my daily creative workflow.",
    imageSrc: Avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this. The collaboration features are genuinely second to none.",
    imageSrc: Avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines. I feel more in control of my schedule than ever before.",
    imageSrc: Avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our existing ecosystem. The documentation is incredibly clear.",
    imageSrc: Avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "The user interface is so intuitive that even the least tech-savvy members of our team were up and running in minutes.",
    imageSrc: Avatar5,
    name: "Alex Chen",
    username: "@alexchen_dev",
  },
  {
    text: "Finding a tool that balances power with simplicity is rare. This hits the sweet spot perfectly for growing startups.",
    imageSrc: Avatar6,
    name: "Sarah Jenkins",
    username: "@sjenkins_pro",
  },
  {
    text: "Customer support is top-notch. Every time I had a question, the team responded within the hour with a helpful solution.",
    imageSrc: Avatar7,
    name: "Michael Ross",
    username: "@mikeross_builds",
  },
  {
    text: "The analytics dashboard gives us insights we never had before. It's fundamentally changed our marketing strategy for the better.",
    imageSrc: Avatar8,
    name: "Taylor Reed",
    username: "@treed_biz",
  },
  {
    text: "I've tried dozens of similar apps, but this is the only one that actually stuck. It's now the first thing I open every morning.",
    imageSrc: Avatar9,
    name: "Linda Wu",
    username: "@lindawu_creates",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="py-28 p-6 lg:p-16 dark:bg-black bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          variants={itemVariants}
          className="text-center text-sm font-medium flex flex-col gap-2 items-center dark:text-white/80 text-neutral-700"
        >
          <span className="dark:border-purple-400 border-blue-300 rounded-xl p-2 shadow-md shadow-blue-300/50 border text-black dark:text-white">
            Testimonials
          </span>
          <h2 className="font-bold text-4xl lg:text-5xl dark:text-white text-black text-center py-4">
            What our users say
          </h2>
          <p className="text-center pt-6 text-base tracking-tighter max-w-md dark:text-gray-400 text-slate-600">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 mt-10 mask-[linear-gradient(to_bottom,transparent,black_30%,black_60%,transparent)] max-h-168 overflow-hidden"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={6} />
          <TestimonialsColumn
            testimonials={secondColumn}
            classname="hidden md:block"
            duration={12}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            classname="hidden lg:block"
            duration={6}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
