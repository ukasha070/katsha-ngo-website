import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const JoinWhatsapp = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-10 bg-yellow-500 w-full my-10 px-10 ">
        <div>
          <h2 className="text-xl font-bold mb-5">Join Our WhatsApp Group</h2>
          <p className="mb-4">
            Stay updated with the latest events, volunteer opportunities, and
            community news.
          </p>
          <Link
            href="#"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-green-600 transition block mt-4 w-fit"
          >
            Join Now
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default JoinWhatsapp;
