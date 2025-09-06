"use client";

import React from "react";

import { FileQuestion } from "lucide-react";
import FullPageLoader from "./FullPageLoader";
import { useArticle } from "@/hooks/useArticles";
import ArticlerHeader from "@/components/ArticlerHeader";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ArticleDetailCtn = ({ slug }: { slug: string }) => {
  const { data, isLoading, error } = useArticle(slug);

  if (isLoading) return <FullPageLoader />;
  if (error)
    return (
      <div>
        <MaxWidthWrapper className="my-0 py-0">
          <div className="flex items-center flex-col justify-center text-center h-screen -mt-21">
            <div className="mb-8">
              <FileQuestion className="size-15" />
            </div>

            <h2 className="font-bold text-2xl mb-5">Could not load article</h2>
            <div className="flex flex-col gap-3 text-sm max-w-sm mx-auto">
              <p>Their was an error with the article or something else.</p>
              <p>Please try again or reload the page.</p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    );
  if (!data) return <p>No article found</p>;

  return (
    <div>
      <ArticlerHeader {...data} />
      <MaxWidthWrapper className="pb-14">
        <div
          id="article-wrapper"
          className="max-w-5xl"
          dangerouslySetInnerHTML={{ __html: data.content ?? "" }}
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default ArticleDetailCtn;
