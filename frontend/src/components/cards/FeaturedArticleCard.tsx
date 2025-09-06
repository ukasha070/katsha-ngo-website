import React from "react";
import Image from "next/image";

// components
import Link from "next/link";
import { ArrowHead, Logo } from "../Icon";
import { articleType } from "@/lib/types";
import MaxWidthWrapper from "../MaxWidthWrapper";

const FeaturedArticleCard = ({ ...props }: articleType) => {
  return (
    <div id="feature-aritcle-40">
      <MaxWidthWrapper className="my-10 overflow-visible max-md:pb-58 px-0">
        <div>
          <div className="relative w-full">
            <div className="w-full md:w-10/12 h-[20rem] md:h-[30rem] relative">
              <Image
                src={props.thumbnail ?? "/background-about.webp"}
                alt="feature-thumbnail"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-1/2 left-1/2 -translate-1/2 font-bold text-2xl p-4 bg-accent/30 flex items-center flex-col gap-4 just-center opacity-60">
                <Logo />
                <p className="text-nowrap text-black/60">Katsha Featured</p>
              </div>
            </div>

            <div className="absolute top-[115%] md:top-1/2 -translate-y-1/2 max-md:left-1/2 max-md:-translate-1/2 md:right-0 p-10 bg-yellow-500 w-11/12 md:max-w-[25rem] lg:max-w-[30rem]">
              <div>
                <div
                  id="location"
                  className="mb-5 text-sm flex items-center gap-3 divide-x"
                >
                  <span className="font-semibold block pr-3">
                    {props.location}
                  </span>

                  <span>{props.created_at}</span>
                </div>

                <Link href={`/articles/${props.slug}`} className="group">
                  <h4 className="font-bold text-xl md:text-4xl mb-5 group-hover:text-white transition-all duration-300 line-clamp-2">
                    {props.title}
                  </h4>

                  <p className="md:text-lg block mb-5 md:mb-10 group-hover:text-white/80 transition-all duration-300 max-sm:line-clamp-3">
                    {props.subtitle}
                  </p>

                  <p className="text-lg flex items-center font-semibold group-hover:text-white max-sm:text-sm transition-all duration-300">
                    <span className="text-current">Read the article</span>

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
