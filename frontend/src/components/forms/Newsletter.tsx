import React from "react";
/**
 * components
 */
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Newsletter = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-10">
        <div className="h-fit w-full flex flex-col md:flex-row items-start md:items-end justify-start">
          <div className="w-11/12 md:w-6/12 lg:w-5/12 max-md:-mb-[6rem] z-10">
            <div className="bg-accent p-6 md:p-10">
              <div className="mb-4">
                <h3 className="mb-3 text-2xl md:text-3xl font-bold">
                  Receive email updates
                </h3>

                <p>
                  LFor nearly 90 years, the IRC has responded to the world's
                  worst humanitarian crises and helped people to survive and
                  rebuild their lives
                </p>
              </div>

              <form action="" method="post" className="">
                <div className="form-input-contaner">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>

                <div className="form-input-contaner">
                  <input
                    type="mail"
                    placeholder="ukasha@mail.com"
                    className="form-input"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-yellow-500 p-4 w-full text-center font-bold mb-5"
                  >
                    Subscribe
                  </button>
                </div>

                <div className="flex items-start gap-2">
                  <div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <p>
                      You will always be able to unsubscribe or change your
                      communication preferences. Read our{" "}
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/**
           * image
           */}
          <div className="w-full md:w-6/12 lg:w-8/12 h-[20rem] md:h-[22rem]">
            <Image
              src={"/background-about.webp"}
              alt="adfds"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Newsletter;
