import React from "react";
import { Metadata } from "next/types";

// components
import CommunityHero from "@/components/hero/CommunityHero";
import SocialsContainer from "@/components/SocialsContainer";
import CommunityArticles from "@/components/page-components/community/CommunityArticles";
import CommunityMembersContainer from "@/components/page-components/community/CommunityMembersContainer";

export const metadata: Metadata = {
  title: "Our Community",
  description: "",
};

const page = () => {
  return (
    <>
      <CommunityHero />
      <SocialsContainer />
      <CommunityArticles />
      <CommunityMembersContainer />
    </>
  );
};

export default page;
