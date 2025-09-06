"use client";

import React from "react";

// component
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// variants
import {
  badgeVariants,
  titleVariants,
  subContainerVariants,
  containerVariants,
  subtitleVariants,
  childrenVariants,
} from "@/lib/variants";
import Title from "./TItle";

const SectionHead = ({
  smallTitle,
  title,
  subTitles,
  children,
  className,
  titleClass,
}: {
  smallTitle?: string;
  title: string;
  subTitles?: string[];
  children?: React.ReactNode;
  className?: string;
  titleClass?: string;
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={cn("flex flex-col gap-4 max-w-2xl mb-10", className)}
    >
      {smallTitle && (
        <motion.div
          variants={badgeVariants}
          className="text-xs bg-black/90 w-fit px-4 py-1 rounded-full text-white/90"
        >
          {smallTitle}
        </motion.div>
      )}
      {/* 
      <motion.h4
        variants={titleVariants}
        className={cn(
          "text-4xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-yellow-400 bg-clip-text text-transparent",
          titleClass
        )}
      >
        {title}
      </motion.h4> */}

      <Title
        title={title}
        titleVariants={titleVariants}
        titleClass={titleClass}
      />

      {subTitles && (
        <motion.div
          variants={subContainerVariants}
          className="space-y-2 text-muted-foreground"
        >
          {subTitles.map((text, i) => (
            <motion.p
              key={i}
              variants={subtitleVariants}
              className="leading-relaxed mb-4 text-lg xl:text-xl"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      )}

      {children && (
        <motion.div variants={childrenVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
};

export default SectionHead;
