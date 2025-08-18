import React from "react";
import Link from "next/link";

/**
 * utils
 */

const NavbarStripe = () => {
  return (
    <div className="w-full py-3 text-primary-foreground text-xs relative">
      <div className="flex items-center justify-center text-center max-w-7xl px-8 mx-auto relative">
        <Link href={""}>
          <p className="font-bold text-base line-clamp-2">
            Get the latest news about the IRC's innovative programs, compelling
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavbarStripe;
