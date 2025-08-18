import React from "react";

import GenericCarousel from "@/components/GenericCarousel";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ArticleCard from "@/components/cards/ArticleCard";
import { CarouselItem } from "@/components/ui/carousel";
import SectionHead from "@/components/SectionHead";

const CommunityArticles = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-16">
        <SectionHead
          className="text-center justify-center mx-auto"
          title="Community Articles"
          subTitles={[
            "Stories, Insights, and Voices from Our Community – Sharing experiences and knowledge to inspire connection and change.",
          ]}
        />
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
      </MaxWidthWrapper>
    </div>
  );
};

export default CommunityArticles;
