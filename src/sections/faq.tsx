"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We support a wide variety of secure payment options to ensure a smooth checkout experience. You can pay using all major credit and debit cards, including Visa, Mastercard, American Express, and Discover. For added convenience, we also support digital wallets like PayPal, Apple Pay, and Google Pay. For enterprise-level subscriptions, we can also arrange for bank wire transfers and formal invoicing upon request.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our team pricing is designed to be flexible and scale with your growth. We operate on a 'per-seat' model where you are billed monthly or annually for the exact number of active users on your team. You have the freedom to add or remove seats at any time; if you add a new member mid-cycle, we simply prorate the cost for the remainder of the billing period. Annual plans come with a 20% discount compared to our month-to-month billing.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time directly from your billing dashboard. When upgrading, the new features become available to you immediately and the price difference is calculated on a prorated basis. If you choose to downgrade, your current plan remains active until the end of the current billing cycle, at which point your account will transition to the new tier without any data loss.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. All data is encrypted at rest and in transit using industry-standard AES-256 encryption. Our infrastructure is hosted in SOC 2 Type II compliant data centers, and we perform daily automated backups to ensure your information is never lost. Additionally, we conduct regular third-party security audits and vulnerability assessments to maintain the highest level of protection against emerging threats.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs">
      <div className="flex flex-col items-center justify-center gap-16 py-28 lg:py-36 ">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white">
          Frequently asked <br />
          <span className="text-purple-400 text-6xl">Questions</span>
        </h2>
        <div className="flex flex-col gap-4 w-7/8 text-gray-150 max-w-2xl">
          {items.map((item, idx) => {
            //Check if this specific item is the open one
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                // layout
                className="flex flex-col py-6 px-4 border border-purple-300/20 shadow-lg/60 rounded-4xl cursor-pointer bg-[#161616] overflow-hidden"
                onClick={() => toggle(idx)} // Toggle when clicking the whole card
              >
                <motion.h2
                  className="flex px-4 justify-between text-base font-semibold"
                  // layout="position"
                >
                  {item.question}
                  <PlusIcon
                    className={`size-5 text-purple-400 ${
                      isOpen ? "-rotate-45" : ""
                    } transition-all duration-300`}
                  />
                </motion.h2>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: { duration: 0.3 },
                        //   height: { duration: 0.4 },
                        //   opacity: { duration: 0.25, delay: 0.1 },
                        // },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: { duration: 0.3 },
                        // transition: {
                        //   height: { duration: 0.4 },
                        //   opacity: { duration: 0.2 },
                        // },
                      }}
                    >
                      <p className="px-4 pt-4 text-gray-300 mt-4 text-sm tracking-tight">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
