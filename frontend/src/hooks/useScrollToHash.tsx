"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function useScrollToHash(offset: number = 120) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash; // e.g., "#section1"
    if (hash) {
      const element = document.querySelector(hash) as HTMLElement | null;
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [pathname, searchParams, offset]);
}
