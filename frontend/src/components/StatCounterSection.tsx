"use client";
/**
 * Components
 */
import StatCounter from "./StatCounter";
import { Projector, Smile, Users, Globe } from "lucide-react";

const stats = [
  { label: "Our Success", target: 12, icon: Projector },
  { label: "Our Networks", target: 2, icon: Smile },
  { label: "Community Members", target: 12, icon: Users },
  { label: "Villages Reached", target: 15, icon: Globe },
];

export default function StatCounterSection() {
  return <StatCounter stats={stats} />;
}
