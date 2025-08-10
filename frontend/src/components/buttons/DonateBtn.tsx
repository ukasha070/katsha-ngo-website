"use client";

import React from "react";

/**
 * utils
 */
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { openDonationForm } from "@/store/slice/donationFormSlice";

/**
 * store
 */
import { useStore } from "@/hooks/useStore";

type propsType = React.ComponentPropsWithoutRef<"button"> & {
  children?: React.ReactNode;
  innderClass?: string;
};

const DonateBtn = ({
  children,
  className,
  innderClass,
  ...props
}: propsType) => {
  const { _, dispatch } = useStore();
  return (
    <button
      type="button"
      onClick={() => dispatch(openDonationForm())}
      className={cn("h-12 rounded-lg w-full px-4 bg-yellow-500", className)}
      {...props}
    >
      <div
        className={cn(
          "flex items-center flex-row gap-3 justify-between font-semibold",
          innderClass
        )}
      >
        <span className="font-bold">Donate</span>

        <Heart className="size-4 stroke-3" />
      </div>
      {children}
    </button>
  );
};

export default DonateBtn;
