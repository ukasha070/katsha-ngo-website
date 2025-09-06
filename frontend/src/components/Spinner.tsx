import React from "react";
import { cn } from "@/lib/utils";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div
        className={cn(
          "w-6 h-6 border-4 border-current border-t-transparent border-l-transparent rounded-full animate-spin",
          className
        )}
      />
    </div>
  );
};

export default Spinner;
