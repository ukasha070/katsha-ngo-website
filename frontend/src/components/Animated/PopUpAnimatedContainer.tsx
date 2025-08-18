"use client";

import React, { useRef, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { motion, MotionStyle } from "framer-motion";
import { fadeInUpMotionVariants } from "@/lib/variants";
import { TFadeAnimationContainerProps } from "@/lib/types";

const FadeAnimationContainer: React.FC<TFadeAnimationContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <motion.div
      key={props.title}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUpMotionVariants}
      className={cn(``, className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export function PopUpAnimatedContainer({
  custom,
  children,
  className,
  style,
}: {
  custom: number | undefined;
  className?: string;
  children: ReactNode;
  style?: MotionStyle;
}) {
  const contactMethodRef = useRef<HTMLDivElement>(null);
  return (
    <FadeAnimationContainer
      ref={contactMethodRef}
      custom={custom}
      className={className}
      style={style}
    >
      {children}
    </FadeAnimationContainer>
  );
}
