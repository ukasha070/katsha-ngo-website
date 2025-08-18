"use client";

import Link from "next/link";
import React, { useState } from "react";

// components
import DonationAmountForm from "./DonationAmountForm";
import DonationInformationForm from "./DonationInformationForm";
import SectionHead from "@/components/SectionHead";

const DonationForm = () => {
  const [formStep, setFormStep] = useState<1 | 2>(1);

  return (
    <div id="donation-form-wrapper" className="max-w-[85%] sm:max-w-md w-full">
      <div className="bg-background p-6 relative w-full">
        <div>
          <SectionHead
            title="Support Our Cause"
            subTitles={[" Every contribution helps make a difference."]}
          />
        </div>

        <div className={`${formStep !== 1 ? "hidden" : ""}`}>
          <DonationAmountForm setFormStep={setFormStep} formStep={formStep} />
        </div>

        <div className={`${formStep !== 2 ? "hidden" : ""}`}>
          <DonationInformationForm />
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-4 text-xs flex-wrap justify-center divide-x">
            <Link href="" className="pr-4">
              <span className="whitespace-nowrap">Why to Donate to us</span>
            </Link>
            <Link
              href="https://www.pesapal.com/security"
              target="_blank"
              className="pr-4"
            >
              <span className="whitespace-nowrap">Secured by pesapal</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
