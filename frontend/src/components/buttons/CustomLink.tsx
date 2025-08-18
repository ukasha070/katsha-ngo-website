import React from "react";
import Link from "next/link";

// utils
import { cn } from "@/lib/utils";

// components
import { LucideIcon } from "lucide-react";

type TCustomLinkProps = {
  href: string;
  title: string;
  Icon: LucideIcon;
  className?: string;
  children?: React.ReactNode;
};

const CustomLink = ({
  Icon,
  children,
  href,
  title,
  className,
}: TCustomLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "bg-yellow-500 hover:bg-yellow-600 duration-300 transition-all flex gap-2 items-center p-3 px-5",
        className
      )}
    >
      <p className="font-bold">{title}</p>
      <Icon className="size-4" />
      {children}
    </Link>
  );
};

export default CustomLink;
