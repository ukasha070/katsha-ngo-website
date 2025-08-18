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

            <div className="max-w-full bg-accent -ml-[17rem] -mb-[17rem] sm:-ml-10 sm:-mb-10 relative border-l-2 border-l-black/50">
              <div className="p-8 md:p-12">
                <div className="sm:text-xl text-black/80 mb-5">
                  <p className="mb-3 max-md:line-clamp-4">
                    I started this organization to turn compassion into real
                    action. With the right team and partners, we’re tackling big
                    challenges and making a difference
                  </p>
                  <p className=" max-md:line-clamp-4">
                    Though the journey has had its hurdles, we remain focused on
                    empowering communities and creating lasting change. This is
                    more than an organization — it’s a movement I’m proud to
                    lead.
                  </p>
                </div>

                <div>
                  <h3 className="font-black text-lg">Ukasha Hacks</h3>
                  <p className="text-sm">
                    President & CEO of the International Rescue Committee
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
