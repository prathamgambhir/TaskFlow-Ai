"use client"

import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const items = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay.",
  },
  {
    question: "How does the pricing work for teams?",
    answer: "Our team plans are billed per user, per month. You only pay for the number of seats you need.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use industry-standard AES-256 encryption and conduct regular security audits.",
  },
];

export default function Faqs() {
  // 1. Track the index of the open item
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    // 2. If already open, close it (null). If not, set to this index.
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-16 py-28 lg:py-36 ">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white">
          Frequently asked <br />
          <span className="text-purple-400 text-6xl">Questions</span>
        </h2>
        <div className="flex flex-col gap-4 w-7/8 text-gray-150 max-w-2xl">
          {items.map((item, idx) => {
            // 3. Check if THIS specific item is the open one
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="flex flex-col gap-4 py-6 px-4 border border-purple-300/20 shadow-lg/60 rounded-4xl cursor-pointer bg-[#161616]"
                onClick={() => toggle(idx)} // Toggle when clicking the whole card
              >
                <h2 className="flex px-4 justify-between text-base font-semibold">
                  {item.question}
                  {/* 4. Switch icons based on the individual isOpen check */}
                  {isOpen ? (
                    <XMarkIcon className="size-5 text-purple-400" />
                  ) : (
                    <PlusIcon className="size-5 text-purple-400" />
                  )}
                </h2>
                
                {/* 5. Only show answer if this specific index is open */}
                {isOpen && (
                  <p className="text-gray-300 px-4 text-sm tracking-tight">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}