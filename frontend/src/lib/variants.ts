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
