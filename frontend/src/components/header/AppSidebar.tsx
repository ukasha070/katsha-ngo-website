"use client";
import React from "react";
import Link from "next/link";

/***
 * components
 */
import { Logo, LogoText } from "../Icon";
import { menuItems } from "@/lib/contants";
import DonateBtn from "../buttons/DonateBtn";
import SearchBtn from "../buttons/SearchBtn";
import NavbarStripe from "./NavbarStripe";

// store
import { useStore } from "@/hooks/useStore";
import { closeSidebar } from "@/store/slice/appSidebarSlice";
import NavLinksContainer from "./NavLinksContainer";

const AppSidebar = () => {
  const state = useStore().appSidebarState;
  const dispatch = useStore().dispatch;

  return (
    state.isOpen && (
      <div>
        <div
          className="overlay-container cursor-pointer"
          onClick={() => dispatch(closeSidebar())}
        />

        {/*  sidebar */}
        <div className="fixed max-w-10/12 sm:max-w-8/12 md:max-w-md z-50 top-0 w-full h-screen right-0">
          <div className="w-full h-full overflow-y-auto bg-background">
            <div className="relative h-full">
              {/* header file */}
              <div className="p-5">
                <div>
                  <div className="flex items-center justify-between ">
                    <Link href={"/"}>
                      <div className="flex items-center gap-2">
                        <Logo />
                        <LogoText />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* navlinks */}
              <ul className="flex flex-col text-black/80 font-semibold divide-y divide-accent/20">
                {/* {menuItems.map((menuItem, _) => (
                  <li
                    key={menuItem.id}
                    className="bg-black h-14 sm:h-12 text-white/70  flex items-center"
                    onClick={() => dispatch(closeSidebar())}
                  >
                    <Link href={menuItem.href} className="px-5">
                      <span>{menuItem.name}</span>
                    </Link>
                  </li>
                ))} */}

                <NavLinksContainer
                  className="flex flex-col  font-semibold divide-y divide-accent/20 w-full items-start"
                  liCLassName="bg-black h-14 sm:h-12 text-white/70 w-full flex items-center"
                  aCLassName="pl-6"
                />

                <SearchBtn
                  className="h-14 flex px-6 items-center border-l-2 border-l-black/80  gap-3"
                  onClick={() => dispatch(closeSidebar())}
                >
                  <span className="font-semibold">Search</span>
                </SearchBtn>

                <DonateBtn
                  onClick={() => dispatch(closeSidebar())}
                  className="h-14 rounded-none w-full text-center justify-center"
                  innderClass="justify-center"
                />
              </ul>

              {/* footer */}
              <div className="absolute bottom-0 bg-black w-full px-6">
                <NavbarStripe />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AppSidebar;
