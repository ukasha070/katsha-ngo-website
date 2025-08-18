import React from "react";
import Link from "next/link";

/**
 * utils
 */
import { splitAuto } from "@/lib/utils";

// components
import { ArrowHead } from "../Icon";
import { LucideIcon } from "lucide-react";
import { PopUpAnimatedContainer } from "../Animated/PopUpAnimatedContainer";

type TNetworkCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  url: string;
  color: string;
  id: number;
};

const NetworkCard = (props: TNetworkCardProps) => {
  const subTitleText = splitAuto(props.subtitle);

  return (
    <PopUpAnimatedContainer
      custom={props.id}
      className={`max-w-lg shadow-2xl`}
      key={props.title}
    >
      <div>
        <div className="flex flex-col w-full p-10 ">
          <div className="flex items-center gap-8 mb-4 font-bold ">
            <props.icon />
            <h4 className="text-xl font-black capitalize">{props.title}</h4>
          </div>
          <div className="group">
            {subTitleText.map((subTitleTextItem, subTitleTextIndex) => (
              <p
                key={subTitleTextIndex}
                style={{ backgroundColor: props.color }}
                className="block mb-1 w-fit text-sm bg-black p-1 px-3 rounded-md text-white"
              >
                {subTitleTextItem}
              </p>
            ))}

            <Link
              href={props.url}
              className="flex items-center gap-4 font-semibold group-hover:text-black hover:font-bold transition-all duration-300 mt-5"
            >
              <span>Visit Now</span>
              <ArrowHead />
            </Link>
          </div>
        </div>
      </div>
    </PopUpAnimatedContainer>
  );
};

export default NetworkCard;
