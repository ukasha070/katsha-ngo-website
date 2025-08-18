import React from "react";
import Link from "next/link";

// components
import SectionHead from "../../SectionHead";
import { MoreVertical } from "lucide-react";
import { CarouselItem } from "../../ui/carousel";
import ArticleCard from "../../cards/ArticleCard";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import GenericCarousel from "../../GenericCarousel";
import FeaturedArticleCard from "../../cards/FeaturedArticleCard";

const Articles = () => {
  return (
    <div>
      <div className="my-12">
        <MaxWidthWrapper className="overflow-hidden">
          <SectionHead
            className="justify-center items-center mx-auto text-center"
            title="Our Articles/Stories"
            subTitles={[
              "Explore stories and articles that highlight our journey, impact, and the people making a difference.",
            ]}
          />

          {/* {Feartured } */}
          <FeaturedArticleCard />

          {/* random articles */}
          <div>
            <div className="flex flex-col items-center mb-6 text-center mx-auto justify-center">
              <h3 className="text-xl text-center font-bold">
                See some quick articles
              </h3>
              <p>Some random articles that you can read.</p>
            </div>

            <div>
              <GenericCarousel>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <CarouselItem
                    key={idx}
                    className="w-full basis-full md:basis-1/2 lg:basis-1/3 flex justify-center ml-7"
                  >
                    <ArticleCard />
                  </CarouselItem>
                ))}
              </GenericCarousel>
            </div>
          </div>

          <div className="mt-10 w-fit mx-auto">
            <Link
              href={"/articles"}
              className="bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 flex gap-2 items-center p-3 px-5"
            >
              <p className="font-bold">View More</p>
              <MoreVertical className="size-4" />
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Articles;
