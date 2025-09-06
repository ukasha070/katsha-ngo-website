import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SectionHead from "./SectionHead";

const ourCoreValues: string[] = [
  "Integrity: We hold ourselves to the highest ethical standards, ensuring transparency and trust in all our initiatives",
  "Inclusivity: We believe in providing equal opportunities for everyone, regardless of their background.",
  "Community: We prioritize local solutions and support community growth.",
  "Innovation: We continuously seek creative solutions to address digital challenges.",
];

const OurCoreValues = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-16">
        <SectionHead
          title="Our core values"
          subTitles={[
            "The principles that guide our mission and inspire our actions.",
          ]}
        />

        <div className="flex flex-col gap-3 max-w-4xl">
          <ol className="flex flex-col gap-8">
            {ourCoreValues.map((coreValueText, idx) => (
              <li className="flex items-start gap-4" key={idx}>
                <div className="font-black text-2xl text-black/40">
                  <span>0{idx + 1}</span>
                </div>

                <p>{coreValueText}</p>
              </li>
            ))}
          </ol>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurCoreValues;
