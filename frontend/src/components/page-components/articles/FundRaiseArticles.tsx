import React from "react";

// components
import { MoreVertical } from "lucide-react";
import { CarouselItem } from "../../ui/carousel";
import ArticleCard from "../../cards/ArticleCard";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import GenericCarousel from "../../GenericCarousel";
import CustomLink from "@/components/buttons/CustomLink";
import SectionHead from "@/components/SectionHead";

const FundRaiseArticles = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-12">
        <div>
          <div className="flex flex-col items-center mb-6 text-center mx-auto justify-center">
            <SectionHead
              title="See Where Your Donations Go"
              subTitles={[
                "Explore inspiring articles that showcase how your donations fuel innovation, support volunteers, and open doors of opportunity",
              ]}
            />
            <h3 className="text-xl text-center font-bold"></h3>
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
          <CustomLink
            href={"/articles"}
            title="View More"
            Icon={MoreVertical}
            className="px-8"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FundRaiseArticles;
