import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionHead from "@/components/SectionHead";
import React from "react";

const WhyToDonateToUs = () => {
  return (
    <div id="Why-do-donate-to-us">
      <MaxWidthWrapper className="my-16">
        <SectionHead
          title="Why to donate to katsha."
          subTitles={[
            "Your Contribution Fuels Hope and Action – Every donation helps us reach more lives, create sustainable solutions, and build a brighter future.",
          ]}
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default WhyToDonateToUs;
