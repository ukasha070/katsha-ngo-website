import React from "react";

import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SectionHead from "../SectionHead";

const AboutHero = () => {
  return (
    <div className="flex items-center flex-col mb-12">
      <div className="w-full h-[50vh] md:h-[60vh] -z-10 relative">
        <Image
          alt="user"
          src={"/background-about.webp"}
          width={1000}
          height={740}
          className="w-full h-full object-cover"
        />

        <div className="absolute left-1/2 top-1/2 -translate-1/2 ">
          <h2 className="font-bold text-lg text-white bg-black/50 p-4">
            Who we are
          </h2>
        </div>
      </div>

      <MaxWidthWrapper className="overflow-visible max-sm:px-10 w-full max-sm:p-8 p-12 bg-accent -mt-30 max-md:max-w-10/12">
        <SectionHead
          smallTitle="Katsha Uganda"
          title=" Who are we"
          subTitles={[
            "Empowering Uganda through digital literacy and creating local digital solutions",
            "To build an inclusive digital ecosystem that transforms lives by making technology accessible, affordable, and relevant for all Ugandans.",
          ]}
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutHero;
