import FeatureTimeLine from "@/components/FeatureTimeline";
import OurTearm from "@/components/page-components/how-we-are/OurTearm";
import Purpose from "@/components/Purpose";
import CeoSay from "@/components/cards/CeoSayCard";
import AboutHero from "@/components/hero/AboutHero";
import StatCounterSection from "@/components/innerSection/StatCounterSection";
import React from "react";

const page = () => {
  return (
    <>
      <AboutHero />

      <Purpose />
      <CeoSay />
      <OurTearm />
      <StatCounterSection />
      <FeatureTimeLine />
    </>
  );
};

export default page;
