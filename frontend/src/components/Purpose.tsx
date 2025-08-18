import React from "react";
import PurposeCard from "./cards/PurposeCard";
import MaxWidthWrapper from "./MaxWidthWrapper";

const purposes = [
  {
    title: "Mission",
    subtitle:
      "Katsha Uganda is dedicated to empowering youth across Uganda by providing free access to education resources, digital literacy programs, and technology skills training. We aim to bridge the digital divide, promote innovation, and support career development for young people to thrive in a modern, connected world.",
  },

  {
    title: "Vision",
    subtitle:
      "A Uganda where every young person has the knowledge, skills, and opportunities to succeed in the digital age. Through our platforms — including past paper archives, coding lessons, and internship connections — we aim to build a confident, skilled generation ready to lead Uganda’s future.",
  },
];

const Purpose = () => {
  return (
    <div>
      <MaxWidthWrapper className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-4">
          {[
            purposes.map((purposeItem, purposeItemIndex) => (
              <PurposeCard key={purposeItemIndex} {...purposeItem} />
            )),
          ]}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Purpose;
