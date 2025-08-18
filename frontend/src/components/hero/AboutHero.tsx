import React from "react";

import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";

const AboutHero = () => {
  return (
    <div className="flex items-center flex-col mb-12">
      <div className="w-full h-[50vh] md:h-[70vh] -z-10">
        <Image
          alt="user"
          src={"/background-about.webp"}
          width={1000}
          height={740}
          className="w-full h-full object-cover"
        />
      </div>

      <MaxWidthWrapper className="overflow-visible max-sm:px-10 w-full max-sm:p-8 p-12 bg-accent -mt-30 max-md:max-w-10/12">
        <div className="">
          <p className="text-sm mb-2">Katsha Uganda</p>

          <h4 className="font-bold text-3xl md:text-4xl mb-5 text-black">
            Who are we
          </h4>

          <div className="max-w-3xl">
            <p className="md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              harum nulla hic veritatis rem commodi dolores tenetur corporis,
              qui ex necessitatibus nesciunt odio reprehenderit eum soluta
              provident dolor iusto illum!
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutHero;
