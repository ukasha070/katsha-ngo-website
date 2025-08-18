"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

/**
 * components
 */
import { LucideIcon } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

/**
 * utils
 */
import { formatNumber } from "@/lib/utils";

type StatItem = {
  label: string;
  target: number;
  icon: LucideIcon;
};
type TStatCounterProps = {
  stats: StatItem[];
};

const StatCounter: React.FC<TStatCounterProps> = ({ stats }) => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const fps = 60;
    const totalFrames = Math.round((duration / 1000) * fps);
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      setCounts((prev) =>
        prev.map((_, idx) => {
          const target = stats[idx].target;
          const progress = frame / totalFrames;
          const nextCount = Math.round(target * progress);
          return nextCount > target ? target : nextCount;
        })
      );

      if (frame === totalFrames) clearInterval(interval);
    }, duration / totalFrames);

    return () => clearInterval(interval);
  }, [inView, stats]);

  return (
    <MaxWidthWrapper className="w-full my-12">
      <div
        ref={ref}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mx-auto py-10 md:gap-10"
      >
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center bg-background  shadow-lg p-6 w-full max-sm:max-w-68 mx-auto rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <IconComponent className="text-yellow-500 size-8" />
                <span className="text-4xl font-extrabold text-yellow-500 font-mono">
                  {formatNumber(counts[idx])}
                </span>
              </div>
              <h3 className="mt-2 text-lg text-center text-gray-700">
                {stat.label}
              </h3>
            </div>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default StatCounter;
