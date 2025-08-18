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
      href="/donate"
      className={cn(
        "h-12 rounded-lg w-full flex items-center px-4 bg-yellow-500",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center flex-row gap-3 justify-between font-semibold",
          innderClass
        )}
      >
        <span className="font-bold">Donate</span>

        <Heart className="size-5 stroke-0 stroke-none fill-red-700 animate-heartbeat" />
      </div>
      {children}
    </Link>
  );
};

export default DonateBtn;
