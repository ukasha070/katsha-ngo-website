"use client";
import React, { useState } from "react";

/**
 * components
 */
import MaxWidthWrapper from "./MaxWidthWrapper";
import FaqCard from "./cards/FaqCard";

const faqs = [
  {
    _id: 1,
    question: "What is the mission of your NGO?",
    answer:
      "Our mission is to drive sustainable development in Uganda by fostering digital transformation, empowering communities, and creating equal opportunities for all.",
    _created_at: "2025-08-08",
  },
  {
    _id: 2,
    question: "Why is digital transformation important for Uganda?",
    answer:
      "Digital transformation enables better access to education, healthcare, jobs, and governance, helping Uganda close development gaps and prepare for a competitive future.",
    _created_at: "2025-08-08",
  },
  {
    _id: 3,
    question: "How can I support your initiatives?",
    answer:
      "You can contribute by donating, volunteering, partnering, or sharing our mission. Every form of support helps expand our reach and impact.",
    _created_at: "2025-08-08",
  },
  {
    _id: 4,
    question: "Who benefits from your programs?",
    answer:
      "Our programs primarily serve underserved communities, including rural populations, youth, and women, ensuring inclusive growth and equal access to opportunities.",
    _created_at: "2025-08-08",
  },
];

const FaQs = () => {
  const [currentFaq, setCurrentFaq] = useState<number | null>(null);

  return (
    <div>
      <div>
        <MaxWidthWrapper className="py-10">
          <div className="flex flex-col lg:flex-row items-start gap-10 divide-x ">
            <div className="w-full lg:w-4/12 pr-10">
              <div>
                <div className="text-xs mb-3">Insurance FAQ</div>

                <h4 className="text-3xl font-bold mb-5">
                  Frequently Asked Questions
                </h4>

                <p className="max-w-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit eos ipsam sint unde aperiam officia labore minus
                  possimus placeat itaque.
                </p>

                <div className="py-5">
                  <button
                    type="button"
                    className="p-3 px-7 rounded-full bg-yellow-500 font-semibold"
                  >
                    Load more
                  </button>
                </div>
              </div>
            </div>

            {/**
             * faq section
             */}
            <div className="w-full lg:w-8/12">
              <div className="grid grid-cols-1 gap-5">
                {faqs.map((faqItem, faqIndex) => (
                  <FaqCard
                    {...faqItem}
                    currentFaq={currentFaq}
                    setCurrentFaq={setCurrentFaq}
                    key={faqIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default FaQs;
