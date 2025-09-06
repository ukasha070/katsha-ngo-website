"use client";

import { motion } from "framer-motion";
import { HelpingHand } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import DonateBtn from "./buttons/DonateBtn";
import CustomLink from "./buttons/CustomLink";

export default function CallToAction() {
  return (
    <section className="relative bg-yellow-600 text-white/90 py-20 px-6 text-center shadow-xl my-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <MaxWidthWrapper>
          <h2 className="text-4xl font-black mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto text-white/60">
            Every contribution helps us provide hope and support to those in
            need. Together, we can build a brighter future.
          </p>
          <div className="flex justify-center gap-4 flex-wrap w-fit mx-auto">
            <DonateBtn
              className="bg-white w-fit mx-auto rounded-full px-6 pl-8 h-14"
              innderClass="text-black/80"
            />

            <CustomLink
              className="bg-yellow-500 hover:bg-white w-fit mx-auto rounded-full px-6 pl-8 min-h-14 max-[310px]:py-2  sm:h-14"
              href="/articles?is_fundraise=true"
              Icon={HelpingHand}
              iconClassName={"stroke-black/60 size-6 "}
              title="Contribute the community"
            />
          </div>
        </MaxWidthWrapper>
      </motion.div>
    </section>
  );
}
