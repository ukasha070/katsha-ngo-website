import GenericCarousel from "@/components/GenericCarousel";
import JoinCommunity from "@/components/JoinCommunity";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionHead from "@/components/SectionHead";
import { CommunityMemberCard } from "@/components/cards/CommunityMemberCard";
import React from "react";

const members = [
  { name: "Jane Doe", image: "/founder.webp", profileUrl: "/profile/jane" },
  {
    name: "Mugoya Joshep",
    image: "/community/katumba-joshua.png",
    profileUrl: "/profile/john",
  },
];

export default function CommunityMembersContainer() {
  return (
    <MaxWidthWrapper className="overflow-visible">
      <div>
        <SectionHead
          className="text-center justify-center mx-auto"
          title="Community Members"
          subTitles={[
            '"Meet the People Who Make Our Mission Possible" – Celebrating the faces, stories, and spirit of our community.',
          ]}
        />

        <GenericCarousel
          autoplayDelay={2500}
          contentClassName="flex items-center gap-4 py-10"
          className="overflow-visible"
        >
          {Array.from({ length: 10 }).map((_, idx) =>
            members.map((member, idx) => (
              <CommunityMemberCard
                key={idx}
                name={member.name}
                image={member.image}
                profileUrl={member.profileUrl}
              />
            ))
          )}
        </GenericCarousel>

        <JoinCommunity />
      </div>
    </MaxWidthWrapper>
  );
}
