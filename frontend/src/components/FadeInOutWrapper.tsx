"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type TFadeInOutProps = {
  isVisible: boolean;
  children: React.ReactNode;
  duration?: number;
  className?: string;
};

const FadeInOutWrapper = ({
  isVisible,
  children,
  duration = 0.01,
  className,
}: TFadeInOutProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn("z-100", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
          style={{ display: "block" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FadeInOutWrapper;
