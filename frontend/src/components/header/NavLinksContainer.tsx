"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// utils
import { menuItems } from "@/lib/contants";
import { cn } from "@/lib/utils";
import { closeSidebar } from "@/store/slice/appSidebarSlice";
import { useStore } from "@/hooks/useStore";

export default function NavLinksContainer({
  className,
  liCLassName,
  isNavbar,
  aCLassName,
}: {
  isNavbar?: boolean;
  className?: string;
  liCLassName?: string;
  aCLassName?: string;
}) {
  const dispatch = useStore().dispatch;
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        `flex items-center h-full w-fit text-base font-semibold ${
          isNavbar ? "max-md:hidden" : ""
        }`,
        className
      )}
    >
      {menuItems.map(({ id, name, href }) => {
        const isActive = pathname === href;

        return (
          <li
            key={id}
            id={id}
            className={cn("h-full w-fit", liCLassName)}
            onClick={() => dispatch(closeSidebar())}
          >
            <Link
              href={href}
              className={cn(
                `h-full  px-2 flex items-center border-b-2 w-full transition-colors ${
                  isActive
                    ? "border-blue-500 text-blue-500 font-black border-b-4"
                    : "border-transparent hover:border-blue-300 hover:text-blue-300"
                }`,
                aCLassName
              )}
            >
              <span className="whitespace-nowrap">{name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
