import React from "react";

// compoents
import SectionHead from "./SectionHead";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TopArticleCard from "./cards/TopArticleCard";

const TopArticles = () => {
  return (
    <div>
      <div>
        <MaxWidthWrapper className="my-12">
          <SectionHead title="Top Articles" subTitles={[]} />

          <div className="grid grid-cols-1 md:grid-cols-2 max-md:divide-y md:divide-x divide-black/40 gap-14">
            <TopArticleCard />
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default TopArticles;
