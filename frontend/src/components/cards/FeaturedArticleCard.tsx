import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowHead } from "../Icon";

const FeaturedArticleCard = () => {
  return (
    <div id="feature-aritcle-40">
      <MaxWidthWrapper className="lg:py-10 my-10 overflow-visible max-md:pb-58">
        <div>
          <div className="relative w-full">
            <div className="w-full md:w-10/12 h-[20rem] md:h-[30rem]">
              <Image
                src={"/background-about.webp"}
                alt="feature-thumbnail"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-[115%] md:top-1/2 -translate-y-1/2 max-md:left-1/2 max-md:-translate-1/2 md:right-0 p-10 bg-yellow-500 w-11/12 md:max-w-[25rem] lg:max-w-[30rem]">
              <div>
                <div
                  id="location"
                  className="mb-5 flex items-center gap-3 divide-x"
                >
                  <span className="font-semibold block pr-3">
                    Kampala Uganda
                  </span>

                  <span>July 15 20</span>
                </div>

                <Link href={""} className="group">
                  <h4 className="font-bold text-2xl md:text-4xl mb-5 group-hover:text-white transition-all duration-300">
                    Crisis in Gaza: What to know and how to help
                  </h4>

                  <p className="md:text-lg block mb-5 md:mb-10 group-hover:text-white/80 transition-all duration-300">
                    Learn more about how the IRC is delivering lifesaving aid to
                    Palestinians, and what you can do to help.
                  </p>

                  <p className="text-lg flex items-center font-semibold group-hover:text-white transition-all duration-300">
                    <span>Read the article</span>

                    <ArrowHead />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FeaturedArticleCard;
