"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimate, AnimationPlaybackControls } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TickerWrapper({
  children,
  className,
  direction,
}: {
  children: ReactNode;
  direction?: "left" | "right";
  className?: string;
}) {
  const [scope, animate] = useAnimate();
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    if (scope.current) {
      animation.current = animate(
        scope.current,
        { x: direction === "left" ? "-50%" : "50%" },
        { duration: 30, ease: "linear", repeat: Infinity }
      );
    }
  }, [scope]);

  useEffect(() => {
    if (animation.current) {
      animation.current.speed = isHovered ? 0.3 : 1;
    }
  }, [isHovered]);

  return (
    <div
      className={cn(
        "w-full flex overflow-hidden pr-24 relative pb-5",
        className
      )}
    >
      {/* Fade effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        ref={scope}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-none items-center gap-6 group"
      >
        {children}
      </motion.div>
    </div>
  );
}
