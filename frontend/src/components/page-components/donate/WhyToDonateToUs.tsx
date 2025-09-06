import React from "react";

// components
import DonateCTA from "@/components/DonateCTA";
import SectionHead from "@/components/SectionHead";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const WhyToDonateToUs = () => {
  return (
    <div id="Why-do-donate-to-us">
      <div className="my-16">
        <MaxWidthWrapper>
          <SectionHead
            title="Why to donate to katsha."
            subTitles={[
              "Your Contribution Fuels Hope and Action – Every donation helps us reach more lives, create sustainable solutions, and build a brighter future.",
            ]}
          />
        </MaxWidthWrapper>

        <DonateCTA
          imageSrc="/background-about.webp"
          title="Give today. Create lasting change."
          subtitle="Every contribution strengthens education, health, and livelihoods in our communities."
          href="/donate"
          badges={["Tax-deductible", "SSL Secured", "Mobile Money Accepted"]}
          stats={[
            { label: "People served", value: "25k+" },
            { label: "Projects active", value: "18" },
            { label: "Since", value: "2014" },
          ]}
        />
      </div>
    </div>
  );
};

export default WhyToDonateToUs;
