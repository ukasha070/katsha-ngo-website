"use client";

import React from "react";

/**
 * utils
 */
import { cn } from "@/lib/utils";

type propsType = React.ComponentPropsWithoutRef<"button"> & {
  children?: React.ReactNode;
};

const SidebarBtn = ({ children, className, ...props }: propsType) => {
  return (
    <button type="button" className={cn("h-full w-full", className)} {...props}>
      <div className="w-4 h-4 flex items-center flex-col justify-between">
        <span className="w-full h-[2px] bg-black/80 block rounded-full"></span>
        <span className="w-7/10 h-[2px] bg-black/80 block rounded-full"></span>
        <span className="w-full h-[2px] bg-black/80 block rounded-full"></span>
      </div>
      {children}
    </button>
  );
};

export default SidebarBtn;
