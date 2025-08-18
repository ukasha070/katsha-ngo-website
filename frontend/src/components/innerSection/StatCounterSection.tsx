"use client";
/**
 * Components
 */
import StatCounter from "../StatCounter";
import { Projector, Smile, Users, Globe } from "lucide-react";

const stats = [
  { label: "Projects Completed", target: 1200, icon: Projector },
  { label: "Happy Clients", target: 800, icon: Smile },
  { label: "Volunteers", target: 350, icon: Users },
  { label: "Countries Reached", target: 15, icon: Globe },
];

export default function StatCounterSection() {
  return <StatCounter stats={stats} />;
}
