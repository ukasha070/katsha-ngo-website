import React from "react";

// components
import Purpose from "@/components/Purpose";
import CeoSay from "@/components/cards/CeoSayCard";
import AboutHero from "@/components/hero/AboutHero";
import OurCoreValues from "@/components/OurCoreValues";

import StatCounterSection from "@/components/StatCounterSection";
import OurTearm from "@/components/page-components/how-we-are/OurTearm";
import CommunityMembersContainer from "@/components/page-components/community/CommunityMembersContainer";

import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Who we are",
  description: "",
};

const page = () => {
  return (
    <>
      <AboutHero />
      <Purpose />
      <OurCoreValues />
      <CeoSay />
      <OurTearm />
      <CommunityMembersContainer />
      <StatCounterSection />
    </>
  );
};

export default page;
