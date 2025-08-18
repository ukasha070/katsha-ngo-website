import ArticlerHeader from "@/components/ArticlerHeader";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const page = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-12 max-w-4xl px-6 md:mx-16">
        <ArticlerHeader
          title={"How Uganda is being transformed"}
          subTitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate architecto tempore voluptatibus sequi similique quis, fugit eveniet voluptas asperiores alias."
          }
          timeStamps={"sdf"}
        />

        <div id="article-wrapper">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          facilis obcaecati doloremque autem, officiis dicta! Fugiat vitae
          deleniti beatae facere tempore. Optio explicabo ipsam dolorem nobis
          repellat exercitationem ex expedita.
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
