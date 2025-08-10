import React from "react";
import { cn } from "@/lib/utils";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "loader border-4 border-current w-full aspect-square",
        className
      )}
    />
  );
};

export default Loader;
