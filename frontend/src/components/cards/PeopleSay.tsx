import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import { Quote } from "lucide-react";

const PeopleSay = () => {
  return (
    <div>
      <MaxWidthWrapper className="oveflow-visible pb-72 sm:pb-12">
        <div>
          <div className="flex relative w-full items-end">
            <div className="max-w-72 min-w-72 sm:max-w-xs sm:min-w-xs w-full aspect-square">
              <Image
                src={"/user6.webp"}
                alt="user"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-xl bg-accent -ml-[15rem] -mb-[17rem] sm:-ml-10 sm:-mb-10 relative border-l-2 border-l-black/50">
              <div className="p-10">
                <div className="sm:text-xl text-black/50 mb-5">
                  <p className="mb-3">
                    Never before has the world needed the IRC as it does today.
                    Meeting those needs will require.
                  </p>
                  <p>
                    before has the world needed the IRC as it does today.
                    Meeting those needs will require N
                  </p>
                </div>

                <div>
                  <h3 className="font-black text-lg">Ukasha Hacks</h3>
                  <p className="text-sm">
                    President & CEO of the International Rescue Committee
                  </p>
                </div>

                <div className="absolute top-10 rotate-y-180 left-10 text-black/20">
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

export default PeopleSay;
