"use client";

import Link from "next/link";
import CustomBtn from "../buttons/CustomBtn";
import { useStore } from "@/hooks/useStore";
import React, { useState, FormEvent } from "react";
import { donationFormSteps } from "@/lib/contants";
import { ExternalLink, Repeat, X } from "lucide-react";
import FadeInOutWrapper from "../FadeInOutWrapper";
import { closeDonationForm } from "@/store/slice/donationFormSlice";

const DonationSteps = () => {
  return (
    <div>
      <div className="flex items-start justify-between  my-10">
        {donationFormSteps.map((donationFormStepItem, _) => (
          <div
            key={donationFormStepItem.id}
            className="w-1/2 h-fit flex flex-col cursor-pointer justify-center items-start "
          >
            <div className="w-full flex items-center justify-center">
              <div className="bg-black/40 h-9 w-9 min-w-9 flex items-center justify-center">
                <span className="font-bold">{donationFormStepItem.id}</span>
              </div>
              <div className="w-full h-1 bg-black/40 " />
            </div>
            <span className="text-xs mt-1 mb-1">
              Step {donationFormStepItem.id}
            </span>
            <p className="font-semibold">{donationFormStepItem.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const InformationForm = () => {
  return (
    <div className="hidden">
      <div className="mb-8">
        <form action="" method="post">
          <div className="form-input-container">
            <label htmlFor="desired-name">Desired Name</label>
            <input
              type="text"
              name="desired-name"
              id=""
              className="form-input"
              placeholder="ukasha "
            />
          </div>

          <div className="form-input-container">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id=""
              className="form-input"
              placeholder="ukasha@mail.com"
            />
          </div>

          <CustomBtn
            type="button"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Donate Now
          </CustomBtn>
        </form>
      </div>
    </div>
  );
};

const AmountForm = () => {
  const quickAmounts: number[] = [5, 10, 20, 50, 100];
  const [donationAmount, setDonationAmount] = useState<number | null>();
  const [donationCurrency, setDonationCurrency] = useState<"UGX" | "USD">(
    "UGX"
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Quick Donation USD */}
      <div>
        <div className="flex items-center text-gray-700 font-medium gap-4 pb-2">
          <select
            name="currency"
            id=""
            className="w-full px-2 font-bold h-12 form-input"
          >
            <option value="USD">USD</option>
            <option value="USD">UGX</option>
          </select>
          <div className="w-full flex items-center justify-center">
            <Repeat className="size-6 stroke-2" />
          </div>
          <div className="w-full px-5 font-bold h-12 form-input flex items-center">
            <p>UGX</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 border-t pt-5">
          {quickAmounts.map((amount) => (
            <button
              type="button"
              key={amount}
              className={`px-4 py-2 rounded-lg font-semibold border transition-all duration-200 ${
                amount === 1
                  ? "bg-yellow-500 text-white "
                  : "bg-white text-gray-700"
              }`}
            >
              ${amount}
            </button>
          ))}

          <button
            type="button"
            className="px-4 py-2 rounded-lg font-semibold border border-black/50 transition-all duration-200"
          >
            <span>Custom</span>
          </button>
        </div>
      </div>

      {false && (
        <div>
          <input placeholder="Enter amount in USD" className="form-input" />
        </div>
      )}

      <div>
        <div className="flex items-center gap-5 text-lg">
          <p className="font-bold ">UGX : </p>
          <p>12000</p>
        </div>
      </div>

      {/* Submit */}
      <CustomBtn
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-foreground font-semibold py-3 transition-colors duration-200"
      >
        <span>Next Step</span>
      </CustomBtn>
    </form>
  );
};

const DonationForm = () => {
  const { state, dispatch } = useStore();
  return (
    <FadeInOutWrapper isVisible={state.donationForm.isOpen}>
      <div className="fixed top-0 right-0 left-0  min-w-screen h-screen overflow-y-auto z-100  bg-black/50 backdrop-blur flex items-center justify-center">
        <div className="h-full w-full relative">
          <div className="w-10/12 md:max-w-md mx-auto mt-10 bg-white p-6 relative">
            <button
              type="button"
              onClick={() => dispatch(closeDonationForm())}
              className="absolute -top-3 -left-4 bg-accent h-10 w-10 border flex items-center justify-center"
            >
              <X className="size-5 stroke-2" />
            </button>

            <div>
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Support Our Cause
                </h2>

                <Link href={""}>
                  <ExternalLink className="size-5" />
                </Link>
              </div>
              <p className="text-gray-600 mb-6">
                Every contribution helps make a difference.
              </p>
            </div>

            <DonationSteps />

            <InformationForm />
            <AmountForm />

            <div className="mt-4">
              <div className="flex items-center gap-4 text-xs flex-wrap justify-center ">
                <Link href="" className="pr-4">
                  <span className="whitespace-nowrap">Why to Donate to us</span>
                </Link>
                <Link href="" className="pr-4">
                  <span className="whitespace-nowrap">Secured by pesapal</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInOutWrapper>
  );
};

export default DonationForm;
