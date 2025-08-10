import React from "react";

import NetworkCard from "./cards/NetworkCard";
import { TNetworkCardProps } from "@/lib/types";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CalendarDays, Briefcase, GraduationCap } from "lucide-react";

export const networks: TNetworkCardProps[] = [
  {
    icon: CalendarDays,
    title: "Date Uganda",
    subtitle: "Connecting people and opportunities across Uganda.",
    url: "https://dateuganda.org",
    color: "#F97316", // Orange
  },
  {
    icon: Briefcase,
    title: "Intern",
    subtitle: "Your gateway to internships and career development.",
    url: "https://intern.org",
    color: "#2563EB", // Blue
  },
  {
    icon: GraduationCap,
    title: "Uneb",
    subtitle: "Uganda National Examinations Board resources and services.",
    url: "https://uneb.ac.ug",
    color: "#16A34A", // Green
  },
];

const Networks = () => {
  return (
    <div>
      <MaxWidthWrapper className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-sm:divide-y">
          {networks.map((networkItem, networkIndex) => (
            <NetworkCard {...networkItem} key={networkIndex} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Networks;
