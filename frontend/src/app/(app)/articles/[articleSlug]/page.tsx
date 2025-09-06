import React from "react";

import ArticleDetailCtn from "@/components/ArticleDetailCtn";

const page = async ({
  params,
}: {
  params: Promise<{ articleSlug: string }>;
}) => {
  const { articleSlug } = await params;

  return <ArticleDetailCtn slug={articleSlug} />;
};

export default page;
