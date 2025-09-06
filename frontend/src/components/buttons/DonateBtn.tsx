"use client";

import React from "react";

/**
 * utils
 */
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

/**
 * store
 */
import Link from "next/link";

type propsType = React.ComponentPropsWithoutRef<"a"> & {
  children?: React.ReactNode;
  innderClass?: string;
};

const DonateBtn = ({
  children,
  className,
  innderClass,
  ...props
}: propsType) => {
  return (
    <Link
      href="/donate#donation-form"
      className={cn(
        "h-12 rounded-lg w-full flex items-center px-4 bg-yellow-600 hover:bg-yellow-500 transition-all duration-300",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center flex-row gap-3 justify-between font-semibold text-white",
          innderClass
        )}
      >
        <span className="font-bold text-inherit">Donate</span>

        <Heart className="size-5 stroke-0 stroke-none fill-red-600 animate-heartbeat" />
      </div>
      {children}
    </Link>
  );
};

export default DonateBtn;
