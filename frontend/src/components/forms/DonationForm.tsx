"use client";

import React from "react";

// form
import z from "zod";
import { useForm } from "react-hook-form";
import { donationSchema } from "@/schemes/schemes";
import { zodResolver } from "@hookform/resolvers/zod";

// components
import { cn } from "@/lib/utils";
import SectionHead from "../SectionHead";
import CustomBtn from "../buttons/CustomBtn";

type donationSchemeType = z.infer<typeof donationSchema>;

const DonationForm = ({ progess }: { progess?: boolean }) => {
  const presetAmounts = [10, 25, 50, 100, 250, 500];
  const goalAmount = 10000;
  const raisedAmount = 7500;

  const form = useForm<donationSchemeType>({
    resolver: zodResolver(donationSchema),
  });
  const errors = form.formState.errors;
  const isLoading = form.formState.isLoading;

  const onSubmit = (data: donationSchemeType) => {
    console.log(data);
  };

  const donationAmount = form.watch("donation_amount");

  return (
    <div className="w-full" id="donation-form">
      <div className="mb-8">
        <SectionHead
          title="Support this Mission"
          subTitles={[" Every contribution helps make a difference."]}
          className="mb-2"
        />

        {progess && (
          <div className="relative">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-yellow-600">
                  ${raisedAmount} of ${goalAmount}
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
              <div
                style={{ width: `${(raisedAmount / goalAmount) * 100}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600 transition-all duration-500"
              ></div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="form-input-container">
          <input
            type="text"
            className="form-input"
            {...form.register("donor_name")}
            placeholder="Your preffered name eg: ukasha"
          />

          {errors.donor_name && (
            <p className="form-error">{errors.donor_name.message}</p>
          )}
        </div>

        <div className="form-input-container">
          <input
            type="text"
            className="form-input"
            {...form.register("donor_email")}
            placeholder="Your email eg:ukasha@gmail.com"
          />

          {errors.donor_email && (
            <p className="form-error">{errors.donor_email.message}</p>
          )}
        </div>

        <div className="py-3 flex items-center flex-wrap justify-center gap-3">
          {presetAmounts.map((ammount, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => {
                form.setValue("donation_amount", ammount);
              }}
              className={cn(
                "flex items-center border rounded-sm w-16 justify-center p-2 ",
                `${
                  donationAmount === ammount
                    ? "bg-yellow-600 border-yellow-600"
                    : null
                }`
              )}
            >
              <span>$</span>
              <span> {ammount}</span>
            </button>
          ))}
        </div>

        <div className="form-input-container relative">
          <label htmlFor="donation_amount">Donation ammount</label>
          <div className="relative w-full">
            <input
              type="text"
              className="form-input font-bold text-lg"
              {...form.register("donation_amount")}
              placeholder="$ 100"
            />
          </div>
        </div>

        <CustomBtn
          type="submit"
          className="w-full py-4 text-current"
          disabled={isLoading}
          loading={isLoading}
        >
          <p>Donate Now</p>
        </CustomBtn>
      </form>
    </div>
  );
};

export default DonationForm;
