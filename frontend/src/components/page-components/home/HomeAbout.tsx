import React from "react";
import Link from "next/link";

/**
 * components
 */
import CeoSay from "../../cards/CeoSayCard";
import { Users } from "lucide-react";
import SectionHead from "../../SectionHead";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import StatCounterSection from "../../innerSection/StatCounterSection";

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
            <Link
              href={"/who-we-are"}
              className="px-6 py-4 font-bold bg-yellow-500 text-bold flex items-center gap-2"
            >
              <span>Get to Know More</span>
              <Users className="size-5" />
            </Link>
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
