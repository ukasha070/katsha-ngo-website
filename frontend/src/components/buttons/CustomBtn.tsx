import React from "react";

/**
 * components
 */
import Spinner from "../Spinner";

/**
 * utils
 */
import { cn } from "@/lib/utils";

type TCustomBtnProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  loading?: boolean;
};

const CustomBtn = ({
  children,
  className,
  loading,
  ...props
}: TCustomBtnProps) => {
  return (
    <button
      type="button"
      disabled={loading}
      className={cn(
        "h-auto flex gap-4 items-center w-fit justify-center font-semibold",
        className
      )}
      {...props}
    >
      {children}

      {loading && (
        <div className="w-5 h-5 aspect-square">
          <Spinner className="border-3" />
        </div>
      )}
    </button>
  );
};

export default CustomBtn;
