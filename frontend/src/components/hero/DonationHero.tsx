import React from "react";
import DonationForm from "../forms/donation/DonationForm";

const DonationHero = () => {
  return (
    <div>
      <div className="w-full max-sm:py-10 mb-12 sm:h-screen bg-[url('/background-about.webp')] bg-no-repeat bg-cover flex items-center justify-end md:pr-32 bg-center">
        <DonationForm />
      </div>
    </div>
  );
};

export default DonationHero;
