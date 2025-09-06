import React from "react";

// components
import { File } from "lucide-react";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import SectionHead from "@/components/SectionHead";
import CustomLink from "@/components/buttons/CustomLink";

const NeedHelp = () => {
  return (
    <div id="need-help">
      <MaxWidthWrapper className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="flex flex-col gap-2">
              <SectionHead
                title="Get helped"
                subTitles={[
                  "Support Tailored to Your Needs – Whether you’re seeking guidance, resources, or urgent assistance we’re here to help you in the way that matters most.",
                  "Find the Right Help, Right Awa – Explore our programs and services designed to address your unique situation with care and efficiency.",
                ]}
              />

              <CustomLink
                href={"/get-help"}
                Icon={File}
                title="Fill Form"
                className="w-full py-2.5 flex items-center gap-3 mb-4 text-center justify-center"
              />
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex justify-center">
                <span className="font-black text-4xl text-black/50">01</span>
              </div>
              <div className="w-full">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, repellat. Illo animi in, sit enim nam debitis
                consequuntur eveniet reprehenderit accusamus commodi, vero
                voluptatem fugiat facere dolore obcaecati corrupti nostrum.
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex justify-center">
                <span className="font-black text-4xl text-black/50">02</span>
              </div>
              <div className="w-full">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, repellat. Illo animi in, sit enim nam debitis
                consequuntur eveniet reprehenderit accusamus commodi, vero
                voluptatem fugiat facere dolore obcaecati corrupti nostrum.
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex justify-center">
                <span className="font-black text-4xl text-black/50">03</span>
              </div>
              <div className="w-full">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda, repellat. Illo animi in, sit enim nam debitis
                consequuntur eveniet reprehenderit accusamus commodi, vero
                voluptatem fugiat facere dolore obcaecati corrupti nostrum.
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NeedHelp;
