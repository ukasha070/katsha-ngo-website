import React from "react";
import { Metadata } from "next/types";

// components
import DonationHero from "@/components/hero/DonationHero";
import NeedHelp from "@/components/page-components/donate/NeedHelp";
import WhyToDonateToUs from "@/components/page-components/donate/WhyToDonateToUs";
import WhyDoWeNeedKatsha from "@/components/page-components/donate/WhyDoWeNeedKatsha";

export const metadata: Metadata = {
  title: {
    absolute: "Donate",
  },
};

const page = () => {
  return (
    <>
      <DonationHero />
      <NeedHelp />
      <WhyDoWeNeedKatsha />
      <WhyToDonateToUs />
    </>
  );
};

export default page;
