import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import { Quote } from "lucide-react";

const CeoSay = () => {
  return (
    <div>
      <MaxWidthWrapper className="oveflow-visible pb-72 sm:pb-12">
        <div>
          <div className="flex relative w-full items-end">
            <div className="max-w-72 min-w-72 sm:max-w-xs sm:min-w-xs w-full aspect-square">
              <Image
                src={"/founder.webp"}
                alt="user"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-full bg-accent -ml-[17rem] -mb-[17rem] sm:-ml-10 sm:-mb-10 relative border-l-2 border-l-yellow-600">
              <div className="p-8 md:p-12">
                <div className="sm:text-xl text-black/80 mb-5">
                  <p className="mb-3 max-md:line-clamp-4">
                    I’m Ukasha Katuntu, a 20-year-old software engineer with a
                    vision to transform Uganda’s digital landscape. Growing up
                    facing the challenges like no job opportunities, digital
                    divide bad internet attitude and others
                  </p>
                  <p className=" max-md:line-clamp-4">
                    This inspired me to start Katsha. The idea has been with me
                    since my senior four or five, and I’ve always wanted to give
                    back by bridging the digital divide and making technology
                    accessible to everyone.
                  </p>
                </div>

                <div>
                  <h3 className="font-black text-xl">Ukasha Hacks</h3>
                  <p className="text-sm">
                    President & CEO of <b>Katsha Uganda</b>
                  </p>
                </div>

                <div className="absolute top-8 rotate-y-180 left-5 md:left-10 text-black/10">
                  <Quote className="size-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default CeoSay;
