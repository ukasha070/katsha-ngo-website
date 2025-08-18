import Image from "next/image";
import React from "react";
import { ArrowHead } from "../Icon";
import Link from "next/link";

const ArticleCard = () => {
  return (
    <div>
      <div className="flex flex-col relative">
        <div className="w-full h-[16rem]">
          <Image
            src={"/background-about.webp"}
            alt="bg"
            width={500}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-9/10 -mt-[4rem]  p-5 sm:p-6 bg-yellow-500 group">
          <div>
            <div
              id="location"
              className="mb-5 flex items-center gap-3 divide-x text-sm"
            >
              <span className="font-semibold block pr-3">Kampala Uganda</span>

              <span>July 15 20</span>
            </div>

            <Link href={"/articles/name of"} className="cursor-pointer">
              <div className="group-hover:text-white transition-all duration-300 flex items-start mb-3 ">
                <h4 className="font-bold text-lg line-clamp-20 leading-tight">
                  Crisis in Gaza: What to know and how to help
                </h4>
                <ArrowHead />
              </div>

              <p className="block mb-3 line-clamp-3 group-hover:text-white/80 transition-all duration-300">
                Learn more about how the IRC is delivering lifesaving aid to
                Palestinians, and what you can do to help.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
