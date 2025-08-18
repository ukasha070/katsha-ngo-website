"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type TYStripeAnimtionProps = React.HTMLAttributes<HTMLDivElement> & {
  idx?: number;
};

const PopUpTextAnimationContainer: React.FC<TYStripeAnimtionProps> = ({
  children,
  idx,
  className,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: (idx ?? 0) ** 0.04,
      }}
      viewport={{ once: true, amount: 0.5 }}
      className={cn("relative text-current block", className)}
    >
      {children}
    </motion.div>
  );
};

export default PopUpTextAnimationContainer;
