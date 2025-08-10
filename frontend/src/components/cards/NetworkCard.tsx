import React from "react";

/**
 * utils
 */
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { ArrowHead, Logo } from "../Icon";

type TNetworkCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  url: string;
  color: string;
};

const NetworkCard = (props: TNetworkCardProps) => {
  return (
    <div>
      <div
        style={{ backgroundColor: props.color }}
        className="flex flex-col p-10"
      >
        <div className="flex items-center gap-8 mb-4 font-bold ">
          <props.icon />
          <h4 className="text-2xl">{props.title}</h4>
        </div>
        <div className="group">
          <p className="block mb-4 text-black/60">{props.subtitle}</p>

          <Link
            href={props.url}
            className="flex items-center gap-4 font-semibold group-hover:text-white transition-all duration-300"
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
