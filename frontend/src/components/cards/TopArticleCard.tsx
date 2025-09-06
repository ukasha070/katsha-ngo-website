import React from "react";
import Link from "next/link";

const TopArticleCard = () => {
  return (
    <div className="md:pr-7 max-md:pb-10">
      <Link href={`/articles/sdfdsf`} className="group">
        <div className="flex items-center gap-2 sm:gap-6 mb-3 divide-x divide-black/30 text-shadow-amber-300">
          <p className="block text-nowrap pr-2 sm:pr-6 text-sm">Ndejje</p>
          <p className="block text-nowrap pr-2 sm:pr-6 text-sm">kanaaba</p>
        </div>
        <h3 className="text-xl m-0 p-0 leading-6 mb-3 font-bold">
          Fighting Among the polise force and the united poeple
        </h3>
        <p className="line-clamp-2 max-sm:leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quis
          quo recusandae dolores reprehenderit impedit architecto ex nam aliquid
          deserunt.
        </p>
      </Link>
    </div>
  );
};

export default TopArticleCard;
