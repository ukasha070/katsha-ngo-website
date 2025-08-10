import React from "react";

/**
 * utils
 */
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { ArrowHead, Logo } from "../Icon";
import { splitAuto } from "@/lib/utils";

type TNetworkCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  url: string;
  color: string;
};

const NetworkCard = (props: TNetworkCardProps) => {
  const subTitleText = splitAuto(props.subtitle);

  return (
    <div>
      <div className="flex flex-col p-10">
        <div className="flex items-center gap-8 mb-4 font-bold ">
          <props.icon />
          <h4 className="text-2xl font-black">{props.title}</h4>
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
  );
};

export default NetworkCard;
