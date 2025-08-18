import React from "react";

import NetworkCard from "./cards/NetworkCard";
import { TNetworkCardProps } from "@/lib/types";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CalendarDays, Briefcase, GraduationCap } from "lucide-react";
import SectionHead from "./SectionHead";

export const networks: TNetworkCardProps[] = [
  {
    icon: CalendarDays,
    title: "Date Uganda",
    subtitle:
      "Connecting people and opportunities across Uganda by providing a trusted space for networking, events, and meaningful collaborations that inspire growth.",
    url: "https://dateuganda.org",
    color: "#F97316", // Orange
  },
  {
    icon: Briefcase,
    title: "Intern",
    subtitle:
      "Your gateway to internships and career development, offering young professionals access to real-world experience, mentorship, and pathways.",
    url: "https://intern.org",
    color: "#2563EB", // Blue
  },
  {
    icon: GraduationCap,
    title: "Uneb",
    subtitle:
      "Access comprehensive Uneb resources and services, from past papers and registration details to official updates that empower learners, teachers.",
    url: "https://uneb.ac.ug",
    color: "#16A34A", // Green
  },
];

const Networks = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-12">
        {/* { header} */}

        <SectionHead
          className="mb-5 text-center mx-auto flex flex-col gap-2 max-sm:px-6"
          title="Our Networks"
          subTitles={[
            " Our networks bring together partners, organizations, and communities to share resources, expertise, and ideas. Together, we respond faster, reach farther, and create solutions that truly last.",
            "By working hand in hand, we break barriers, amplify voices, and turn challenges into opportunities. These connections are the driving force behind lasting change.",
          ]}
        />

        {/* {content} */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-sm:divide-y">
          {networks.map((networkItem, networkIndex) => (
            <div
              key={networkIndex}
              className={`w-full
               ${
                 networkIndex === networks.length - 1
                   ? "sm:col-span-2 lg:col-span-1"
                   : ""
               }
              `}
            >
              <NetworkCard id={networkIndex} {...networkItem} />
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Networks;
