"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { ExternalLink, X } from "lucide-react";
import CustomBtn from "../buttons/CustomBtn";

const DonationSteps = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between gap-6 my-10">
        <div className="w-1/2 h-fit flex flex-col cursor-pointer justify-center items-start">
          <div className="w-full h-1 bg-blue-500" />
          <span className="text-xs mt-1 mb-2">Step 1</span>
          <p className="font-semibold">Amount</p>
        </div>

        <div className="w-1/2 h-fit flex flex-col cursor-pointer justify-center items-start">
          <div className="w-full h-1 bg-black/40" />
          <span className="text-xs mt-1 mb-2">Step 2</span>
          <p className="font-semibold">Information</p>
        </div>
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
  const [usdAmount, setUsdAmount] = useState<number | null>(null);
  const [ugxAmount, setUgxAmount] = useState<string>("");

  const quickAmounts: number[] = [5, 10, 20, 50, 100];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (usdAmount) {
      alert(`Donating $${usdAmount} USD`);
    } else if (ugxAmount) {
      alert(`Donating ${ugxAmount} UGX`);
    } else {
      alert("Please enter an amount to donate.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Quick Donation USD */}
      <div>
        <div className="flex items-center text-gray-700 font-medium mb-2">
          <p>Quick Donation</p>
          <select name="currency" id="" className="w-fit px-2 font-bold">
            <option value="USD">USD</option>
            <option value="USD">UGX</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-3">
          {quickAmounts.map((amount) => (
            <button
              type="button"
              key={amount}
              onClick={() => setUsdAmount(amount)}
              className={`px-4 py-2 rounded-lg font-semibold border transition-all duration-200 ${
                usdAmount === amount
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-yellow-500 hover:text-yellow-500"
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Donation in UGX */}
      <div>
        <label htmlFor="amout" className="block text-gray-700 font-medium mb-2">
          Donation amount
        </label>
        <input
          type="number"
          id="ugxAmount"
          value={ugxAmount}
          onChange={(e) => {
            setUgxAmount(e.target.value);
            setUsdAmount(null);
          }}
          placeholder="Enter amount in USD"
          className="form-input"
        />
      </div>

      <div>
        <div className="flex items-center gap-5 text-lg">
          <p className="font-bold ">UGX : </p>
          <p>12000</p>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
      >
        Next Step
      </button>
    </form>
  );
};

const DonationForm = () => {
  return (
    <>
      <div className="fixed top-0 right-0 left-0  min-w-screen h-screen overflow-y-auto z-100  bg-black/50 backdrop-blur flex items-center justify-center">
        <div className="h-full w-full relative">
          <div className="w-10/12 md:max-w-md mx-auto mt-10 bg-white p-6 relative">
            <button
              type="button"
              className="absolute -top-3 -left-4 bg-accent rounded-md h-10 w-10 border border-primary flex items-center justify-center"
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
    </>
  );
};

export default DonationForm;
