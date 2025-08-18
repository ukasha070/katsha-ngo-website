import React from "react";

// components
import TopArticles from "@/components/TopArticles";
import ArticleSearch from "@/components/page-components/articles/ArticleSearch";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ArticleSearchForm from "@/components/forms/ArticleSearchForm";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Articles",
  description: "",
};

const page = () => {
  return (
    <div>
      <MaxWidthWrapper className="pt-8">
        <ArticleSearchForm />
        <ArticleSearch />
        <TopArticles />
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
