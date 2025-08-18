import React from "react";
import Link from "next/link";

interface CommunityMemberCardProps {
  name: string;
  image: string;
  profileUrl: string;
}

export const CommunityMemberCard: React.FC<CommunityMemberCardProps> = ({
  name,
  image,
  profileUrl,
}) => {
  return (
    <div className="w-32 flex-shrink-0 bg-white  shadow-lg border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <img src={image} alt={name} className="w-full h-24 object-cover" />
      <div className="p-2 text-center">
        <p className="text-sm font-semibold text-gray-800 truncate">{name}</p>
        <Link
          href={profileUrl ?? "/user-icon.png"}
          className="text-xs text-blue-600 hover:underline"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};
