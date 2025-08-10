"use client";
import React from "react";
import Link from "next/link";

/***
 * components
 */
import { X } from "lucide-react";
import { Logo, LogoText } from "./Icon";
import { menuItems } from "@/lib/contants";
import DonateBtn from "./buttons/DonateBtn";
import SearchBtn from "./buttons/SearchBtn";
import NavbarStripe from "./header/NavbarStripe";
import { useStore } from "@/hooks/useStore";

import { closeSidebar } from "@/store/slice/appSidebarSlice";
import FadeInOutWrapper from "./FadeInOutWrapper";

const AppSidebar = () => {
  const { state, dispatch } = useStore();

  return (
    <FadeInOutWrapper isVisible={state.appSidebar.isOpen}>
      <div className="z-100">
        <div className="z-100">
          <div
            className="overlay-container cursor-pointer"
            onClick={() => dispatch(closeSidebar())}
          />
          {/*
           * sidebar
           */}
          <div className="fixed max-w-10/12 md:max-w-lg z-50 top-0 w-full h-screen right-0">
            <div className="w-full h-full overflow-y-auto bg-background">
              <div className="relative h-full">
                {/* header file */}
                <div className="p-6 pb-10">
                  {/* header */}
                  <div>
                    <div className="flex items-center justify-between ">
                      <Link href={"/"}>
                        <div className="flex items-center gap-2">
                          <Logo />
                          <LogoText />
                        </div>
                      </Link>

                      <div>
                        <button
                          type="button"
                          onClick={() => dispatch(closeSidebar())}
                          className="h-10 w-10 aspect-square flex items-center justify-center border rounded-lg"
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* navlinks */}
                <ul className="flex flex-col text-black/80 font-semibold gap-4">
                  {menuItems.map((menuItem, _) => (
                    <li
                      key={menuItem.id}
                      className="h-14 flex px-6 items-center border-l-2 border-l-black/80"
                    >
                      <Link href={menuItem.href}>
                        <span>{menuItem.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* buttons */}
                <div>
                  <div className="flex flex-col gap-4 mt-10">
                    <SearchBtn className="h-14 flex px-6 items-center border-l-2 border-l-black/80 ml-2 gap-3">
                      <span className="font-semibold">Search</span>
                    </SearchBtn>

                    <DonateBtn
                      className="h-16 rounded-none w-full mt-"
                      innderClass="justify-center"
                    />
                  </div>
                </div>

                {/* footer */}
                <div className="absolute bottom-0 bg-black w-full px-6">
                  <NavbarStripe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInOutWrapper>
  );
};

export default AppSidebar;
