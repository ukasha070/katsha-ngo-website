"use client";

import React from "react";

/**
 * utils
 */
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

type propsType = React.ComponentPropsWithoutRef<"button"> & {
  children?: React.ReactNode;
};

const DonateBtn = ({ children, className, ...props }: propsType) => {
  return (
    <button
      type="button"
      className={cn("h-12 rounded-lg w-full px-4 bg-yellow-500", className)}
      {...props}
    >
      <div className="flex items-center flex-row gap-3 justify-between font-semibold">
        <span>Donate</span>

        <Heart className="size-4" />
      </div>
      {children}
    </button>
  );
};

export default DonateBtn;
