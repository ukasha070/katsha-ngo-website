import React from "react";
import { BlockQuote } from "../Icon";
import Link from "next/link";

type TTestimonialCardProps = {
  profile_link: string;
  photo?: string | null;
  name: string;
  job_title: string;
  content: string;
};

const TestimonialCard = (props: TTestimonialCardProps) => {
  return (
    <div>
      <div className="flex flex-col mx-wuto max-w-md">
        {/* {content} */}
        <div className="px-4 py-12 sm:px-8 md:px-12 relative">
          <div className="absolute top-1 -z-10">
            <BlockQuote className="fill-accent size-20 " />
          </div>

          <p className="text-lg italic text-center ">{props.content}</p>

          <div className="absolute -bottom-4 right-2 rotate-180 -z-10">
            <BlockQuote className="fill-accent size-20" />
          </div>
        </div>

        <div>
          <Link
            href={props.profile_link}
            className="flex flex-col items-center justify-center p-8 bg-yellow-600 hover:bg-yellow-500 group transition-all duration-300"
          >
            <img
              src={props.photo ?? "/user-icon.png"}
              alt={props.name}
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover"
            />
            <p className="text-xl font-semibold leading-tight">{props.name}</p>
            <p className="text-sm">{props.job_title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
