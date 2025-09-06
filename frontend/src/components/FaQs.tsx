"use client";
import React, { useState } from "react";

//  * components
import FaqCard from "./cards/FaqCard";
import SectionHead from "./SectionHead";
import CustomLink from "./buttons/CustomLink";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CircleQuestionMark } from "lucide-react";
import { faqs } from "@/lib/contants";

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
                  title="Ask a Question"
                  href="mailTo:hello@katsha.org"
                  target="_blank"
                  Icon={CircleQuestionMark}
                  className="p-3 px-7 flex items-center justify-center gap-2 font-bold"
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
