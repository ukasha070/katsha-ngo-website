"use client";

import React from "react";

/**
 * utils
 */
import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/useStore";
import { openSidebar } from "@/store/slice/appSidebarSlice";

type propsType = React.ComponentPropsWithoutRef<"button"> & {
  children?: React.ReactNode;
};

const SidebarBtn = ({ children, className, ...props }: propsType) => {
  const { _, dispatch } = useStore();

  return (
    <button
      type="button"
      className={cn("h-full w-full", className)}
      {...props}
      onClick={() => dispatch(openSidebar())}
    >
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
