"use client";
import React from "react";

// components
import Link from "next/link";
import Image from "next/image";
import SectionHead from "./SectionHead";
import { articleType } from "@/lib/types";
import DonateBtn from "./buttons/DonateBtn";
import MaxWidthWrapper from "./MaxWidthWrapper";
import FundraiseProgress from "./FundraiseProgress";
import { getImageSrc, splitByComma } from "@/lib/utils";

const ArticlerHeader = ({ ...props }: articleType) => {
  const tagsList = splitByComma(props.tags ?? "");
  const thumbnail = getImageSrc(props.content ?? "");
  const currencyIcon = props.fundraise?.currency === "USD" ? "$" : "UGX";

  return (
    <div>
      <div className="flex flex-col gap-4 mb-5">
        <div className="w-full h-[45vh]">
          <Image
            src={thumbnail}
            alt="user"
            width={1000}
            height={740}
            className="w-full h-full object-cover"
          />
        </div>
        <MaxWidthWrapper className="overflow-visible max-sm:max-w-[93%] -mt-28 bg-accent  py-8 lg:px-10">
          <div className="w-fit max-w-[90%] md:max-w-[80%] py-4">
            {tagsList.length >= 1 && (
              <div className="mb-2">
                <div className="flex items-center gap-1 flex-wrap">
                  {tagsList.map((tag, idx) => (
                    <Link
                      key={idx}
                      href={`/articles/?tags=${tag}`}
                      className="bg-background text-sm p-1 px-3 rounded-full"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <SectionHead
              className="mt-6 mb-2"
              titleClass="sm:text-4xl text-3xl font-black text-black/70 leading-normal"
              title={props.title}
            />
          </div>

          {props.fundraise && props.category === "fundraise" && (
            <div className="flex items-center w-full">
              <FundraiseProgress
                raised_amount={props.fundraise.raised_amount}
                target_amount={props.fundraise.target_amount}
                currencyIcon={currencyIcon}
              />
            </div>
          )}
          <div className="flex items-center justify-between gap-x-4 divide-black/40 mb-6 flex-nowrap">
            <p className="text-sm">{props.created_at}</p>

            {props.fundraise && props.category === "fundraise" && (
              <DonateBtn className="w-fit rounded-none h-14 px-5" />
            )}
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default ArticlerHeader;
