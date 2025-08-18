import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionHead from "@/components/SectionHead";
import TickerWrapper from "@/components/TickerWrapper";
import { CommunityMemberCard } from "@/components/cards/CommunityMemberCard";
import React from "react";

const members = [
  { name: "Jane Doe", image: "/founder.webp", profileUrl: "/profile/jane" },
  {
    name: "John Smith",
    image: "/usama.webp",
    profileUrl: "/profile/john",
  },
];

export default function CommunityMembersContainer() {
  return (
    <MaxWidthWrapper className="py-10">
      <div>
        <SectionHead
          className="text-center justify-center mx-auto"
          title="Community Members"
          subTitles={[
            '"Meet the People Who Make Our Mission Possible" – Celebrating the faces, stories, and spirit of our community.',
          ]}
        />

        <div className="flex flex-col">
          <TickerWrapper direction="left">
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
          </TickerWrapper>

          <TickerWrapper direction="right">
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
          </TickerWrapper>
        </div>

        <div className="text-center w-fit mx-auto py-4 font-semibold text-lg">
          <p>400/3000 Members</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
