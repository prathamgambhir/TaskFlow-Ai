import { FeatureCard } from "@/components/feature-cards";
import { Ecosystem } from "@/components/Icons/ecosystem";
import { GoalTrackingIcon } from "@/components/Icons/goal-tracking";
import { SecurityIcon } from "@/components/Icons/security";
import { ReactNode } from "react";

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
    <section className="bg-black text-white py-32 px-6" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard index={index} feature={feature} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}
