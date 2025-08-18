import React from "react";

import { sanitize } from "domify";
import MaxWidthWrapper from "./MaxWidthWrapper";
// to do
const ArticleWrapper = (htmlContent: string) => {
  const sanitisedHtmlContent = sanitize(htmlContent);
  return (
    <MaxWidthWrapper>
      <div id="article-wrapper">
        <div
          dangerouslySetInnerHTML={{
            __html: (sanitisedHtmlContent as string) ?? "",
          }}
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default ArticleWrapper;
