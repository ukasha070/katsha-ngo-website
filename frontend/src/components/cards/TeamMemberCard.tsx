import { Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";

const TeamMemberCard = () => {
  return (
    <div className="grid sm:grid-cols-3">
      <div className="relative w-48 sm:w-full h-48 max-h-full rounded shadow sm:h-auto">
        <img
          className="absolute object-cover w-full h-full rounded"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt="Person"
        />
      </div>
      <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2 max-sm:bg-yellow-500 p-8 max-sm:-mt-12 max-sm:ml-10">
        <p className="text-lg font-bold">Oliver Aguilerra</p>
        <p className="mb-4 text-xs text-gray-800">Product Manager</p>
        <p className="mb-4 text-sm tracking-wide text-gray-800">
          Vincent Van Gogh’s most popular painting, The Starry Night.
        </p>
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <Facebook className="fill-current stroke-0 size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
