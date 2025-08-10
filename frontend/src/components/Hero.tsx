import React from "react";
import Link from "next/link";

/**
 * components
 */
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowHead } from "./Icon";

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

const Hero = () => {
  return (
    <div id="hero-container" className="py-8 md:py-24">
      <MaxWidthWrapper className="pt-4 text-sm overflow-x-hidden overflow-y-visible md:px-0">
        <div className="w-full flex items-center flex-row md:flex-row max-sm:w-full md:w-11/12 mx-auto gap-10 md:justify-between max-md:flex-wrap max-md:justify-center max-md:text-center">
          <div className="w-full">
            <ActiveVoluteers />

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black my-4 leading-tight">
              Making Ug<span className="text-yellow-500">an</span>
              <span className="text-red-500">da</span> Better
            </h1>

            <div className="font-semibold text-black/60 p-2">
              <p className="text-lg mb-4">
                Uganda stands at a crossroads—facing urgent challenges, but also
                powerful opportunities to grow through digital innovation,
                inclusive access, and future-ready solutions.
              </p>

              <p className="text-lg">
                We work with communities, government, and partners to build a
                digitally empowered Uganda—where technology drives education,
                health, jobs, and transparency for everyone, especially the
                underserved.
              </p>
            </div>

            {/* Buttons Section */}
            <div className="flex gap-3 flex-col lg:flex-row items-center mt-8">
              <Link
                href=""
                rel="noopener"
                className="flex items-center group py-4 pl-6 px-5 text-base font-bold bg-yellow-500"
              >
                <span>Learn more</span>
                <ArrowHead />
              </Link>
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
                className="size-full w-full scale-[270%] md:scale-[400%] xl:scale-[450%]"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
