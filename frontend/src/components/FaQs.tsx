"use client";
import React, { useState } from "react";

//  * components
import FaqCard from "./cards/FaqCard";
import SectionHead from "./SectionHead";
import CustomLink from "./buttons/CustomLink";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CircleQuestionMark } from "lucide-react";

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
      <MaxWidthWrapper className="py-10">
        <div className="flex flex-col lg:flex-row items-start gap-10 divide-x ">
          {/* { header} */}
          <div className="w-full lg:w-4/12 lg:pr-10 flex justify-center items-center">
            <SectionHead
              className="w-full mx-auto max-lg:text-center"
              title=" Frequently Asked Questions"
              subTitles={[
                "Find quick, clear answers about our work, mission, and ways to get involved.",
                "From programs to donations, our FAQ guides you — and if you need more, we’re just a message away.",
              ]}
            >
              <div className="py-5">
                <CustomLink
                  title="I need help"
                  href="/donate#need-help"
                  Icon={CircleQuestionMark}
                  className="p-3 px-7 bg-yellow-500 flex items-center justify-center gap-2 font-bold"
                />
              </div>
            </SectionHead>
          </div>

          {/* faq section */}
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
  );
};

export default FaQs;
