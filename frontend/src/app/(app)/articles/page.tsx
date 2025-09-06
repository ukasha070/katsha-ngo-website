import React from "react";

// components
import { Metadata } from "next/types";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ArticleSearchForm from "@/components/forms/ArticleSearchForm";
import ArticleSearch from "@/components/page-components/articles/ArticleSearch";

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
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
