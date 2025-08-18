import React from "react";
import Link from "next/link";

// component
import { Logo, LogoText } from "../Icon";
import SidebarBtn from "../buttons/SidebarBtn";
import DonateBtn from "../buttons/DonateBtn";

const CustomNavbar = () => {
  return (
    <header className="shadow-2xl sticky top-0 z-30">
      <nav className="flex items-center w-full bg-background justify-between h-16 px-6 md:px-20 ">
        <div className="w-fit">
          <Link href={"/"} className="flex items-center gap-2">
            <Logo />
            <LogoText />
          </Link>
        </div>

        <div className=" flex items-center justify-center h-full w-fit min-w-12 gap-2">
          <DonateBtn className="font-black rounded-none h-full px-4" />
          <div className="h-full aspect-square">
            <SidebarBtn className="h-full flex items-center justify-center" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default CustomNavbar;
