"use client";

import React from "react";

// components
import SectionHead from "../../SectionHead";
import { MoreVertical } from "lucide-react";
import Spinner from "@/components/Spinner";
import { CarouselItem } from "../../ui/carousel";
import { useArticles } from "@/hooks/useArticles";
import ArticleCard from "../../cards/ArticleCard";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import GenericCarousel from "../../GenericCarousel";
import CustomLink from "@/components/buttons/CustomLink";
import FeaturedArticleCard from "../../cards/FeaturedArticleCard";

const Articles = ({ actionLink }: { actionLink?: string; filter?: string }) => {
  const { data, isLoading, error } = useArticles({
    page: 1,
    tags: null,
    search: null,
    category: null,
    success: false,
    is_featured: true,
  });

  if (isLoading)
    return (
      <div className="h-64 w-full flex items-center justify-center -mt-22">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <MaxWidthWrapper className="py-12">
        <p>Something went wrong</p>
      </MaxWidthWrapper>
    );

  const articles = data?.results;
  const slicedArticles = articles?.slice(1);

  const showSlicedArticles =
    slicedArticles && slicedArticles?.length >= 2 ? true : false;
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
          {articles && articles?.length >= 1 && (
            <FeaturedArticleCard {...articles[0]} />
          )}
          {/* random articles */}

          {showSlicedArticles && (
            <div>
              <div className="flex flex-col items-center mb-6 text-center mx-auto justify-center">
                <h3 className="text-xl text-center font-bold">
                  See some quick articles
                </h3>
                <p>Some random articles that you can read.</p>
              </div>

              <div>
                <GenericCarousel>
                  {slicedArticles?.map((data, idx) => (
                    <CarouselItem
                      key={idx}
                      className="w-full basis-full md:basis-1/2 lg:basis-1/3 flex justify-center ml-7"
                    >
                      <ArticleCard {...data} key={idx} />
                    </CarouselItem>
                  ))}
                </GenericCarousel>
              </div>
              <div className="mt-10 w-fit mx-auto">
                <CustomLink
                  href={actionLink ?? ""}
                  title="View More"
                  Icon={MoreVertical}
                  className="px-8"
                />
              </div>
            </div>
          )}
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Articles;
