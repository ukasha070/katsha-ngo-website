import React from "react";
import TeamMemberCard from "../../cards/TeamMemberCard";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import SectionHead from "../../SectionHead";
import { teamMembers } from "@/lib/contants";

const OurTearm = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-12 md:px-20">
        <SectionHead
          title="Our Team"
          className="justify-center items-center mx-auto text-center"
          subTitles={[
            "Discover the passionate individuals behind our mission, working together to create meaningful impact every day.",
          ]}
        />
        <div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 md:gap-10">
            {teamMembers.map((member, memberIndex) => (
              <TeamMemberCard key={memberIndex} {...member} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurTearm;
