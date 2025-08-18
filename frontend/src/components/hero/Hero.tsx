import React from "react";

// components
import { ChevronRight } from "lucide-react";
import CustomLink from "../buttons/CustomLink";
import MaxWidthWrapper from "../MaxWidthWrapper";
import PopUpTextAnimationContainer from "../Animated/PopUpTextAnimation";

function ActiveVoluteers() {
  return (
    <div className="flex items-center max-md:justify-center gap-1.5">
      <img
        src="/user2.webp"
        alt="Badge"
        loading="eager"
        decoding="async"
        style={{
          zIndex: 3,
          width: 20,
          height: 20,
        }}
        className="w-6 p-px border-1 border-border aspect-square rounded-full -mr-3 bg-white relative"
      />
      <img
        src="/user.webp"
        alt="Badge"
        loading="eager"
        decoding="async"
        style={{ zIndex: 2, width: 20, height: 20 }}
        className="w-6 p-px border-1 border-border aspect-square rounded-full -mr-3 bg-white relative"
      />
      <img
        src="/user1.webp"
        alt="Badge"
        loading="eager"
        decoding="async"
        style={{ zIndex: 1, width: 20, height: 20 }}
        className="w-6 p-px border-1 border-border aspect-square rounded-full -mr-3 bg-white relative"
      />
      <span className=" text-sm font-medium px-4">100+ active Voluteers</span>
    </div>
  );
}

const subTitle = [
  " Uganda stands at a crossroads—facing urgent challenges, but also powerful opportunities to grow through digital innovation, inclusive access, and future-ready solutions.",
  "  We work with communities, government, and partners to build a digitally empowered Uganda—where technology drives education, health, jobs, and transparency for everyone, especially the underserved.",
];

const Hero = () => {
  return (
    <div id="hero-container" className="">
      <MaxWidthWrapper className="pt-4 text-sm md:px-0 py-12 md:py-32">
        <div className="w-full flex items-center flex-row md:flex-row max-sm:w-full md:w-11/12 mx-auto gap-10 md:justify-between max-md:flex-wrap max-md:justify-center max-md:text-center">
          <div className="w-full">
            <ActiveVoluteers />

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black my-4 leading-tight">
              <span className="text-black">Making </span>
              <span className="text-yellow-500">Uganda </span>
              <span className="text-red-500">Better</span>
            </h1>

            <div className="font-semibold text-black/60 p-2 flex flex-col gap-4 text-lg">
              {subTitle.map((text, idx) => (
                <PopUpTextAnimationContainer idx={idx} key={idx}>
                  <p>{text}</p>
                </PopUpTextAnimationContainer>
              ))}
            </div>

            {/* Buttons Section */}
            <div className="flex gap-3 flex-col lg:flex-row items-center mt-8">
              <CustomLink
                Icon={ChevronRight}
                title="Learn more"
                href="/make-uganda-better"
                className="flex items-center group py-4 pl-6 px-5 text-base font-bold"
              />
            </div>
          </div>

          {/* Right Column (Banner Image, Video, Testimonials) */}
          <div className="w-full md:w-2 xl:w-5/12 relative max-md:mx-auto flex items-center justify-center">
            <div className="absolute md:-left-[15rem] xl:-left-[2rem]  max-md:-top-[10rem] lg:top-0 -translate-y-1/2 opacity-40 -z-10 max-md:left-1/2 max-md:-translate-x-1/2 w-[10rem]">
              <img
                src="/uganda.png"
                alt="banner"
                loading="eager"
                decoding="async"
                width="300"
                height="233"
                className="size-full w-full scale-[270%] md:scale-[400%] xl:scale-[430%]"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
