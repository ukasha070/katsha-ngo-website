import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TitleProps {
  title: string;
  titleVariants?: any;
  titleClass?: string;
}

export default function Title({
  title,
  titleVariants,
  titleClass,
}: TitleProps) {
  const words = title.trim().split(" ");
  const lastWord = words.pop();
  const rest = words.join(" ");

  return (
    <motion.h4
      variants={titleVariants}
      className={cn(
        "text-4xl font-extrabold tracking-tight text-foreground",
        titleClass
      )}
    >
      {rest} <span className="text-yellow-600">{lastWord}</span>
    </motion.h4>
  );
}
