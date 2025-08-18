import React from "react";
import Link from "next/link";

import { Facebook, LucideIcon } from "lucide-react";

type TTeamMemberCardProps = {
  photo: string;
  name: string;
  job: string;
  bio: string;
  socials: { href: string; icon: LucideIcon }[];
};

const TeamMemberCard = ({ ...props }: TTeamMemberCardProps) => {
  return (
    <div className="grid sm:grid-cols-3">
      <div className="relative w-48 sm:w-full h-48 max-h-full rounded shadow sm:h-auto -z-10">
        <img
          className="absolute object-cover w-full h-full rounded"
          src={props.photo}
          alt={props.name}
        />
      </div>
      <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2 max-sm:bg-yellow-500 p-8 max-sm:-mt-12 max-sm:ml-10">
        <p className="text-lg font-bold">{props.name}</p>
        <p className="mb-4 text-xs text-gray-800">{props.job}r</p>
        <p className="mb-4 text-sm tracking-wide text-gray-800">{props.bio}</p>
        <div className="flex items-center space-x-3">
          {props.socials.map((social, idx) => {
            const Icon = social.icon; // Get the icon component
            return (
              <Link
                href={social.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <Icon className="stroke-2 size-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
