import { LucideIcon } from "lucide-react";

import { ComponentProps } from "react";
import { motion } from "framer-motion";

export type MotionDivProps = ComponentProps<typeof motion.div>;

export type TNetworkCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  url: string;
  color: string;
};

export type TFadeAnimationContainerProps = MotionDivProps & {};
