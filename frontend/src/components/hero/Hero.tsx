"use client";
import React from "react";

// components
import { ChevronRight } from "lucide-react";
import CustomLink from "../buttons/CustomLink";
import MaxWidthWrapper from "../MaxWidthWrapper";
import DonateBtn from "@/components/buttons/DonateBtn";

import { motion } from "framer-motion";

function CommunitYMembers() {
  return (
    <div className="flex items-center max-md:mx-auto gap-1.5 bg-black/80 w-fit px-4 py-1 text-white/80 rounded-full">
      <span className=" text-sm font-medium text-inherit">
        100+ Community Members
      </span>
    </div>
  );
}

const Hero = () => {
  return (
    <div id="hero-container" className="">
      <MaxWidthWrapper className="pt-4 text-sm md:px-0 py-12 md:py-32">
        <div className="w-full flex items-center flex-row md:flex-row max-sm:w-full md:w-11/12 mx-auto gap-10 md:justify-between max-md:flex-wrap max-md:justify-center max-md:text-center">
          <div className="w-full">
            <CommunitYMembers />

            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black my-4 leading-tight"
            >
              <span className="text-red-600">Uganda’s</span>{" "}
              <span className="text-yellow-600">Digital</span> Transformation
            </motion.h4>

            <div className="p-2 flex flex-col gap-4 text-lg">
              <p>
                At Katsha, we're dedicated to bridging the digital gap across
                Uganda. Through our innovative platforms, we provide accessible
                education, affordable e-commerce, and meaningful connections.
                Join us in creating a brighter, digitally inclusive future for
                everyone.
              </p>
            </div>

            {/* Buttons Section */}
            <div className="flex gap-5 flex-col md:flex-row max-md:items-center mt-8">
              <DonateBtn
                innderClass={"text-yellow-600 font-bold"}
                className={"rounded-full px-5 bg-background text-lg h-14 w-fit"}
              />
              <CustomLink
                Icon={ChevronRight}
                title="Learn more"
                href="/who-we-are"
                className="w-fit h-14 text-nowrap rounded-full px-6"
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
                className="size-full w-full scale-[270%] md:scale-[400%] xl:scale-[375%]"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
