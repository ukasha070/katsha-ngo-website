import React from "react";
import Link from "next/link";

/**
 * components
 */
import NavbarStripe from "./NavbarStripe";
import { Logo, LogoText } from "../Icon";
import SearchBtn from "../buttons/SearchBtn";
import DonateBtn from "../buttons/DonateBtn";
import SidebarBtn from "../buttons/SidebarBtn";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavLinksContainer from "./NavLinksContainer";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-20">
      <div className="bg-black">
        <MaxWidthWrapper>
          <NavbarStripe />
        </MaxWidthWrapper>
      </div>

      <div className="w-full max-w-screen bg-background">
        <MaxWidthWrapper>
          <nav>
            <div className="flex items-center justify-between w-full h-20 max-w-7xl mx-auto gap-5 ">
              <Link href={"/"} className="flex items-center gap-2">
                <Logo />
                <LogoText />
              </Link>

              <NavLinksContainer isNavbar={true} />

              <div className="flex items-center gap-2 h-full p-0">
                <DonateBtn className="font-black rounded-none h-7/10 px-4" />
                <SearchBtn className="px-2" />
                <div className="h-4/10 w-[2px] min-w-[1.5px] bg-black/20" />
                <SidebarBtn className="px-2" />
              </div>
            </div>
          </nav>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Navbar;
