"use client";

import React from "react";

/**
 * utils
 */
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { openSearchForm } from "@/store/slice/searchFormSlice";
import { useStore } from "@/hooks/useStore";

type propsType = React.ComponentPropsWithoutRef<"button"> & {
  children?: React.ReactNode;
};

const SearchBtn = ({ children, className, ...props }: propsType) => {
  const { _, dispatch } = useStore();
  return (
    <button
      type="button"
      className={cn("h-full w-full", className)}
      {...props}
      onClick={() => dispatch(openSearchForm())}
    >
      <div className="w-6 h-6 flex items-center flex-col justify-between">
        <Search className="size-5 stroke-2" />
      </div>
      {children}
    </button>
  );
};

export default SearchBtn;
