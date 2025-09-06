import React from "react";
import { Metadata } from "next/types";

// components
import DonationHero from "@/components/hero/DonationHero";
import NeedHelp from "@/components/page-components/donate/NeedHelp";
import WhyToDonateToUs from "@/components/page-components/donate/WhyToDonateToUs";
import FundRaiseArticles from "@/components/page-components/articles/FundRaiseArticles";

export const metadata: Metadata = {
  title: "Donate",
};

const page = () => {
  return (
    <>
      <DonationHero />
      <NeedHelp />
      <WhyToDonateToUs />
      <FundRaiseArticles />
    </>
  );
};

export default page;
