import React from "react";

/**
 * utils
 */
import { cn } from "@/lib/utils";

type propType = React.ComponentPropsWithoutRef<"section"> & {
  children?: React.ReactNode;
};

const MaxWidthWrapper = ({ children, ...props }: propType) => {
  return (
    <section
      className={cn("max-w-7xl mx-auto overflow-hidden px-4", props.className)}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
