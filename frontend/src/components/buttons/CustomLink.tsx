import React from "react";
import Link from "next/link";

// utils
import { cn } from "@/lib/utils";

// components
import { LucideIcon } from "lucide-react";

type TCustomLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  href: string;
  title: string;
  Icon: LucideIcon;
  className?: string;
  children?: React.ReactNode;
  iconClassName?: string;
};

const CustomLink = ({
  Icon,
  children,
  href,
  title,
  className,
  iconClassName,
  ...props
}: TCustomLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "bg-yellow-600 hover:bg-yellow-500 duration-300 text-lg transition-all ease-in flex gap-2 items-center p-3 px-5 group",
        className
      )}
      {...props}
    >
      <p className="font-bold">{title}</p>
      <Icon className={cn("size-4", iconClassName)} />
      {children}
    </Link>
  );
};

export default CustomLink;
