"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

// components
import { FileQuestionIcon, Notebook } from "lucide-react";
import Spinner from "@/components/Spinner";
import PaginationBtn from "../../PaginationBtn";
import EmptyState from "@/components/EmptyState";
import ArticleCard from "../../cards/ArticleCard";
import { useArticles } from "@/hooks/useArticles";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ArticleSearch = () => {
  const params = useSearchParams();

  // Helper to convert param to boolean
  const toBoolean = (param: string | null) => !!param;

  // Extract params with defaults
  const tag = params.get("tags") || null;
  const page = Number(params.get("page") || 1);
  const search = params.get("search") || null;
  const success = toBoolean(params.get("success"));
  const category = params.get("category") || null;
  const isFundraise = toBoolean(params.get("is_fundraise"));

  const { data, isLoading, error, isFetching, failureCount } = useArticles({
    page,
    tags: tag,
    search,
    category,
    success,
    is_fundraise: isFundraise,
  });

  if (isLoading)
    return (
      <div className="h-screen w-full flex items-center justify-center -mt-22">
        <div>
          <Spinner />
          <div className="text-center">
            {isFetching && failureCount > 0 && (
              <p>Retrying... (attempt {failureCount + 1})</p>
            )}
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div>
        <div>
          <MaxWidthWrapper className="my-0 py-0">
            <div className="flex items-center flex-col justify-center text-center h-screen -mt-21">
              <div className="mb-8">
                <FileQuestionIcon className="size-15" />
              </div>

              <h2 className="font-bold text-2xl mb-5">{error?.message}</h2>
              <div className="flex flex-col gap-2 text-sm max-w-sm mx-auto">
                <p>Unable to filter or find the articles please.</p>
                <p>Please try again or reload the page.</p>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    );

  const searchTerm =
    tag || page || success || category || isFundraise || search || "";
  const title = `No Search results for "${searchTerm}"`;
  const totalPages = Math.ceil((data?.count ?? 0) / 2);
  const articles = data?.results;

  return (
    <div>
      {articles && articles.length >= 1 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
            {articles?.map((data, idx) => (
              <ArticleCard {...data} key={idx} />
            ))}
          </div>

          {/* pagination */}
          <div className="pb-12">
            <PaginationBtn
              currentPage={page}
              totalPages={totalPages}
              paginationItemsToDisplay={5}
            />
          </div>
        </>
      ) : (
        <div>
          <EmptyState className="py-42" icon={Notebook} title={title} />
        </div>
      )}
    </div>
  );
};

export default ArticleSearch;
