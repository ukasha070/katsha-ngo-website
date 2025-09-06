import { Variants } from "framer-motion";

export const fadeInUpMotionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
    },
  }),
};


export const containerVariants:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const badgeVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } },
};

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
};

export const subContainerVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.25 },
  },
};

export const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const childrenVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.4, duration: 0.6 } },
};
