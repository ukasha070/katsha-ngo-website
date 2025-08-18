"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

// components
import ArticleCard from "../../cards/ArticleCard";
import PaginationBtn from "../../PaginationBtn";

const ArticleSearch = () => {
  const params = useSearchParams();
  const tagParam = params.get("tag");
  const pageParam = params.get("page");
  const searchParam = params.get("search");

  useEffect(() => {}, [pageParam, searchParam, tagParam]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
        <ArticleCard />
      </div>

      {/* pagination */}
      <div className="pb-12">
        <PaginationBtn currentPage={6} totalPages={300} />
      </div>
    </div>
  );
};

export default ArticleSearch;
