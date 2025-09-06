import React from "react";
import Link from "next/link";

/**
 * components
 */
import CeoSay from "../../cards/CeoSayCard";
import { Users } from "lucide-react";
import SectionHead from "../../SectionHead";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import StatCounterSection from "../../StatCounterSection";
import CustomLink from "@/components/buttons/CustomLink";

const HomeAbout = () => {
  return (
    <section>
      <div className="my-12">
        <MaxWidthWrapper>
          <SectionHead
            className="justify-center items-center mx-auto text-center"
            title="Who are we"
            subTitles={[
              "We are a dedicated team focused on creating positive change by addressing challenges with compassion and collaboration. Our mission is to empower communities through resources and support, working alongside partners to build a more just and hopeful future for all.",
            ]}
          >
            <CustomLink
              Icon={Users}
              title="Get to Know More"
              href={"/who-we-are"}
              className="px-6 py-4 font-bold hover:bg-yellow-500 bg-yellow-600 text-bold flex items-center gap-2"
            />
          </SectionHead>
        </MaxWidthWrapper>

        <div className="flex flex-col gap-5 w-full">
          <CeoSay />

          <StatCounterSection />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
