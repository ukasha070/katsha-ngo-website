import React from "react";

// components
import Link from "next/link";
import Image from "next/image";
import { ArrowHead } from "../Icon";
import { articleType } from "@/lib/types";
import FundraiseProgress from "../FundraiseProgress";

const ArticleCard = ({ ...props }: articleType) => {
  const currencyIcon = props.fundraise?.currency === "USD" ? "$" : "UGX";

  return (
    <div>
      <div className="flex flex-col relative h-[100%]">
        <div className="w-full h-[16rem]">
          <Image
            src={props.thumbnail ?? "/corrupt-image.webp"}
            alt="bg"
            width={500}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-9/10 -mt-[4rem]  p-5 sm:p-6 bg-yellow-500 group h-[60%]">
          <div>
            <div
              id="location"
              className="mb-5 duration-300 group-hover:divide-white transition-all  flex items-center gap-3 divide-x divide-black/40 text-sm group-hover:text-white"
            >
              <span className="font-semibold block pr-3 text-inherit">
                {props.location ?? ""}
              </span>

              <span className="text-inherit">{props.created_at ?? ""}</span>
            </div>

            <Link
              href={`/articles/${props.slug}`}
              className="cursor-pointer block mb-3"
            >
              <div className="group-hover:text-white transition-all duration-300 flex items-start mb-3 ">
                <h4 className="font-bold text-lg line-clamp-2 leading-tight">
                  {props.title ?? ""}
                </h4>
                <ArrowHead />
              </div>

              <p
                className="max-sm:leading-tight line-clamp-4 overflow-hidden text-ellipsis group-hover:text-white/80 transition-colors duration-300
 "
              >
                {props.subtitle}
              </p>
            </Link>

            {props.fundraise && props.category === "fundraise" && (
              <FundraiseProgress
                raised_amount={props.fundraise.raised_amount}
                target_amount={props.fundraise.target_amount}
                currencyIcon={currencyIcon}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
