import React from "react";
import TeamMemberCard from "./cards/TeamMemberCard";
import MaxWidthWrapper from "./MaxWidthWrapper";

const OurTearm = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-12 md:px-20">
        <div>
          <div className="grid gap-10 mx-auto lg:grid-cols-2">
            <TeamMemberCard />
            <TeamMemberCard />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurTearm;
