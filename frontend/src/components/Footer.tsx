import React from "react";
import Link from "next/link";

/**
 * utils
 */
import MaxWidthWrapper from "./MaxWidthWrapper";

/**
 * constants
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="max-w-screen flex flex-col">
        <div className="bg-accent">
          <MaxWidthWrapper>
            <div>
              <div className="flex flex-wrap justify-start gap-6 max-w-7xl mx-auto max-xl:p-5 py-5">
                <div className="max-w-2xl">
                  <p>
                    Get the latest news about the IRC's innovative programs,
                    compelling stories about our clients and how you can make a
                    difference.
                  </p>
                  <Link
                    href={""}
                    className="font-semibold underline text-base mt-1 block"
                  >
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        <div className="bg-black/90 text-primary-foreground/60">
          <MaxWidthWrapper>
            <div className="flex items-center flex-wrap justify-between gap-6 max-w-7xl mx-auto max-xl:p-5 py-5">
              <div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <span>
                      Katsha Uganda is a 501(c)(3) nonprofit organization. EIN
                      number:{" "}
                      <span className="font-semibold text-primary-foreground/80">
                        13-5660870
                      </span>
                      .
                    </span>
                  </li>
                  <li>
                    <span className="text-primary-foreground/80">
                      Copyright © Katsha Uganda, {currentYear}.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex items-center flex-wrap gap-2 divide-x divide-white/40">
                  <li className="pr-2">
                    <Link href={""}>FaQs</Link>
                  </li>
                  <li className="pr-2">
                    <Link href={""}>Donate to us</Link>
                  </li>

                  <li className="pr-2">
                    <Link href={""}>About Us</Link>
                  </li>

                  <li className="pr-2">
                    <Link href={""}>
                      <span>Your Privacy</span>
                    </Link>
                  </li>

                  <li>
                    <Link href={""}>
                      <span>Terms and Conditions</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
