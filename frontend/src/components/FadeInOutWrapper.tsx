"use client";
import React from "react";

import { motion, AnimatePresence } from "framer-motion";

type TFadeInOutProps = {
  isVisible: boolean;
  children: React.ReactNode;
  duration?: number;
  className?: string;
};

const FadeInOutWrapper = ({
  isVisible,
  children,
  duration = 0.05,
  className,
}: TFadeInOutProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={className}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FadeInOutWrapper;
