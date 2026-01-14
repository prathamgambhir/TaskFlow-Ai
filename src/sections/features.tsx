"use client";

import { FeatureCard } from "@/components/feature-cards";
import { Ecosystem } from "@/components/Icons/ecosystem";
import { GoalTrackingIcon } from "@/components/Icons/goal-tracking";
import { SecurityIcon } from "@/components/Icons/security";
import { ReactNode } from "react";
import { motion } from "motion/react";
import {
  containerVariants,
  itemVariants,
} from "@/components/stagger-animations";

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const features: Feature[] = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
    icon: <Ecosystem />,
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    icon: <GoalTrackingIcon />,
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    icon: <SecurityIcon />,
    className: "md:col-span-2 lg:col-span-1",
  },
];

export default function Features() {
  return (
    <section className="dark:bg-black bg-white py-32 px-6" id="features">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-24"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-slate-900"
          >
            Everything you need
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="dark:text-gray-400 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard index={index} feature={feature} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
