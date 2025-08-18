import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const MakeUgandaBetter = () => {
  return (
    <div>
      <MaxWidthWrapper className="my-12">
        <div className="flex flex-col gap-4 mb-10">
          <h3 className="font-black pl-4 border-l-4 border-yellow-500 min-h-10 flex items-center text-3xl">
            How Uganda is being transformed
          </h3>

          <p className="max-w-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            architecto tempore voluptatibus sequi similique quis, fugit eveniet
            voluptas asperiores alias.
          </p>

          <div className="flex items-center flex-wrap text-black/70 divide-x gap-3">
            <p className="pr-3">By Admin</p>
            <p className="pr-3">CREATED Tue 02 May 2025</p>
            <p className="pr-3">LAST UPDATED Tue 02 May 2025</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MakeUgandaBetter;
