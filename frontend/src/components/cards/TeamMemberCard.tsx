import React from "react";
import Link from "next/link";

import { Facebook, LucideIcon } from "lucide-react";
import Image from "next/image";

type TTeamMemberCardProps = {
  photo: string;
  name: string;
  job: string;
  bio: string;
  socialsLink: string;
};

const TeamMemberCard = ({ ...props }: TTeamMemberCardProps) => {
  return (
    <Link href={props.socialsLink} className="flex flex-col">
      <div className="w-full">
        <Image
          className="object-cover w-full h-full rounded"
          src={props.photo}
          alt={props.name}
          width={500}
          height={700}
        />
      </div>

      <div className="bg-background p-3 py-5 -mt-10 max-w-[85%] mx-auto w-full text-center">
        <h3 className="font-bold text-lg mb-2 leading-tight">{props.name}</h3>
        <p className="text-sm">{props.job}</p>
      </div>
    </Link>
  );
};

export default TeamMemberCard;
