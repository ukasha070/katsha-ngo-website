import React from "react";
import Link from "next/link";

/**
 * utils
 */
import { splitAuto } from "@/lib/utils";

// components
import { ArrowHead } from "../Icon";
import { LucideIcon, MoreVertical } from "lucide-react";
import { PopUpAnimatedContainer } from "../Animated/PopUpAnimatedContainer";
import CustomLink from "../buttons/CustomLink";

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
        <div className="flex flex-col w-full p-10 py-12 ">
          <div className="flex items-center gap-8 mb-4 font-bold ">
            <props.icon />
            <h4 className="text-xl font-black capitalize">{props.title}</h4>
          </div>
          <div className="group">
            {subTitleText.map((subTitleTextItem, subTitleTextIndex) => (
              <p
                key={subTitleTextIndex}
                className="block mb-1 w-fit text-sm bg-black/80 p-1 px-3 rounded-md text-white"
              >
                {subTitleTextItem}
              </p>
            ))}

            <CustomLink
              title="Visit"
              Icon={MoreVertical}
              href={props.url}
              target="_blank"
              className="w-full text-center flex items-center justify-center h-12 mt-9"
            />
          </div>
        </div>
      </div>
    </PopUpAnimatedContainer>
  );
};

export default NetworkCard;
