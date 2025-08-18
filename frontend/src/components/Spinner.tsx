import React from "react";
import { cn } from "@/lib/utils";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-6 h-6 border-4 border-yellow-500 border-t-transparent border-l-transparent rounded-full animate-spin",
        className
      )}
    />
  );
};

export default Spinner;
