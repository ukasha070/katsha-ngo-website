import React from "react";
import Link from "next/link";

/**
 * utils
 */
import { Instagram, Linkedin, X, Youtube } from "lucide-react";

const NavbarStripe = ({ canDismiss }: { canDismiss?: boolean }) => {
  return (
    <div className="w-full py-3 text-primary-foreground text-xs relative ">
      <div className="flex items-center justify-between max-w-7xl mx-auto relative">
        <div className="flex items-center justify-start flex-wrap divide-x divide-primary-foreground/20">
          <div className="flex items-center gap-2 pr-5">
            <div className="h-6 w-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="fill-red-500 w-5 h-5"
              >
                <path d="M7.455 4.93h1.08v4.437h-1.08V4.93z"></path>
                <circle cx="8.01" cy="11.584" r=".832"></circle>
                <path
                  fill="none"
                  d="M13.446 14.08h-10.9c-.36 0-.72-.192-.915-.554L.966 12.5a1.075 1.075 0 0 1 0-1.08l5.437-8.987c.193-.332.526-.554.915-.554h1.36c.36 0 .72.192.913.553l5.463 9.015c.194.333.194.75 0 1.08l-.692 1.028a1.065 1.065 0 0 1-.914.523z"
                ></path>
                <path d="M13.446 13.556v1.08H2.49c-.11 0-.222-.027-.333-.056a1.81 1.81 0 0 1-.61-.304c-.083-.084-.14-.168-.222-.25-.028-.055-.057-.084-.11-.14-.03-.026-.03-.056-.03-.056l-.025-.055c-.083-.14-.167-.25-.25-.39-.083-.14-.167-.25-.25-.39l-.14-.19c-.083-.14-.11-.224-.167-.333-.138-.445-.11-.943.14-1.36.167-.276.333-.554.5-.804.332-.557.665-1.11 1-1.666a447.13 447.13 0 0 1 2.05-3.383c.333-.555.694-1.137 1.027-1.69.166-.278.333-.557.5-.86l.275-.39.14-.22c.055-.112.138-.195.22-.278.168-.167.39-.305.64-.39a.77.77 0 0 1 .36-.083h1.497c.112 0 .25.027.36.056.222.057.444.195.64.334l.25.25c.025.055.054.082.08.138l.057.11c.083.14.166.278.25.39 1.275 2.135 2.495 4.104 3.52 5.824.526.857 1 1.636 1.416 2.33l.166.25.084.11c.026.054.083.138.083.192.108.25.14.527.108.805-.025.25-.11.5-.25.72-.083.14-.166.25-.25.39-.165.25-.304.442-.415.638a1.58 1.58 0 0 1-.638.584c-.222.11-.388.14-.527.166-.11.027-.192 0-.192 0v-1.08s.083 0 .222-.058a.424.424 0 0 0 .194-.194c.11-.193.275-.416.416-.666.083-.11.167-.25.25-.39.025-.054.083-.138.083-.22s0-.195-.03-.278c0-.026-.026-.026-.026-.056l-.083-.11-.165-.25c-.416-.692-.888-1.47-1.414-2.33-1.024-1.69-2.246-3.688-3.52-5.823-.084-.14-.167-.28-.25-.39l-.057-.083c0-.027-.027-.057-.027-.057l-.084-.082c-.025-.08-.082-.11-.165-.11-.027 0-.083-.025-.11-.025H7.484c-.194 0-.25 0-.306.027a.462.462 0 0 0-.193.11c-.028.03-.056.057-.083.113l-.11.194-.278.415c-.167.276-.333.556-.5.86-.333.554-.693 1.136-1.026 1.69-.693 1.138-1.36 2.275-2.052 3.384l-1 1.663c-.166.277-.332.556-.5.805-.054.14-.082.332-.026.472 0 .028.027.083.027.083l.14.195c.083.14.167.25.25.388.083.14.167.25.25.39l.028.055.026.058c0 .027.028.027.028.057l.083.082c.057.057.11.084.194.084h11.012v-.004z"></path>
              </svg>
            </div>
            <p className="text-sm font-bold underline">Crisis Kampala</p>
          </div>
          <div className="flex items-center gap-2 pl-5">
            <Link href="/" className="p-1">
              <Instagram className="size-4 stroke-2" />
            </Link>
            <Link href="/" className="p-1">
              <Youtube className="size-4 stroke-2" />
            </Link>
            <Link href="/" className="p-1">
              <Linkedin className="size-4 stroke-0 fill-current" />
            </Link>
          </div>
        </div>

        {canDismiss && (
          <button
            type="button"
            className="w-7 h-7 absolute top-1/2 bg-black/90 -translate-y-1/2 flex items-center justify-center right-2 rounded-md text-primary-foreground/60"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavbarStripe;
