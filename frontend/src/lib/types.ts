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


export interface paginatedResponseType<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface articleType {
  id: string;
  title: string;
  thumbnail?:string;
  subtitle: string;
  slug: string;
  location: string;
  tags:string;
  is_featured: boolean;
  content?:string;
  category: string;
  category_display?: string;
  is_published: boolean;
  success: boolean;
  created_at: string; // formatted from DRF ("%B %d, %Y")
  updated_at: string;
  fundraise?: fundraiseType
}

export type fundraiseType = {
  target_amount: string; 
  raised_amount: string;  
  currency: string;
  deadline: string | null; 
  created_at: string;
  updated_at: string; 
};

export interface privacyPolicyType {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
}

export interface termOfUseType {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
}