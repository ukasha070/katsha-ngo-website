import React from "react";
import Link from "next/link";

// components
import { WhatsappIcon } from "./Icon";
import MaxWidthWrapper from "./MaxWidthWrapper";

const JoinCommunity = () => {
  return (
    <div className="bg-background">
      <MaxWidthWrapper className="relative isolate overflow-hidden px-6 text-center sm:rounded-3xl sm:px-16">
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Hello, You can join our Whatsapp Community where we share idea,
          vision, mentorship and more.
        </p>
        <div className="isolate mt-8 flex items-center justify-center -space-x-2 overflow-hidden">
          <img
            className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-background"
            src="https://randomuser.me/api/portraits/men/34.jpg"
            alt=""
          />
          <img
            className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-background"
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt=""
          />
          <img
            className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-background"
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt=""
          />
          <img
            className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-background"
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt=""
          />
          <span className="!ml-4 font-bold text-yellow-600">Join Whatsapp</span>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <Link
            target="_blank"
            href={"https://whatsapp.com/channel/0029Vb6PL5CG3R3nNQcEv72j"}
            className="text-md relative inline-flex items-center gap-x-2 rounded-full bg-green-600 px-6 py-4 font-semibold text-background shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Join Now
            <WhatsappIcon />
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default JoinCommunity;
