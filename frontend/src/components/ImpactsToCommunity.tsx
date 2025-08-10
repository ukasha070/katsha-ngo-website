import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NetworkCard from "./cards/NetworkCard";

function Card() {
  return (
    <div className="p-5 z-10">
      <div>
        <h3 className="text-7xl mb-3 font-bold">109K</h3>

        <p className="block mb-3">Students on Intern</p>

        <ul>
          Lorem dignissimos, beatae omnis cumque velit. Eveniet, voluptatibus.
        </ul>
      </div>
    </div>
  );
}

const ImpactsToCommunity = () => {
  return (
    <MaxWidthWrapper>
      <div className=" rounded-4xl p-10 grid text-left grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-wrap break-words relative overflow-hidden z-10">
        <div
          className="absolute top-[70%] lg:top-[50%] left-1/2 -translate-x-1/2 rounded-full bg-yellow-500/30 z-0"
          style={{ width: "210vw", height: "200vw" }}
        ></div>
        <NetworkCard />
        <NetworkCard />
        <NetworkCard />
      </div>
    </MaxWidthWrapper>
  );
};

export default ImpactsToCommunity;
