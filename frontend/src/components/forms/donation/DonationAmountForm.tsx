"use client";
import { useEffect } from "react";

// third party
import * as z from "zod";
import { useForm } from "react-hook-form";
import { formatCurrency } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

// utils
import { donationSchema } from "@/schemes/schemes";

// components
import CustomBtn from "@/components/buttons/CustomBtn";
import { DollarSign, Euro, PoundSterling } from "lucide-react";

const DonationAmountForm = ({
  setFormStep,
}: {
  formStep?: number;
  setFormStep: React.Dispatch<React.SetStateAction<1 | 2>>;
}) => {
  const quickAmounts: number[] = [5, 10, 20, 50, 100];

  const amountFormSchema = donationSchema
    .pick({
      donation_amount: true,
      currency: true,
    })
    .superRefine(({ currency, donation_amount }, ctx) => {
      if (typeof donation_amount !== "number") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Donation amount must be a number.",
          path: ["donation_amount"],
        });
        return;
      }
      if (currency === "UGX" && donation_amount < 7500) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Minimum donation amount is UGX 7,500.",
          path: ["donation_amount"],
        });
      } else if (currency !== "UGX" && donation_amount < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Minimum donation amount is 2 ${currency}.`,
          path: ["donation_amount"],
        });
      }
    });

  type TAmountFormSchema = z.infer<typeof amountFormSchema>;

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TAmountFormSchema>({
    resolver: zodResolver(amountFormSchema),
    defaultValues: {
      currency: "USD",
      donation_amount: quickAmounts[0],
    },
  });

  const { currency, donation_amount } = watch();

  useEffect(() => {
    if (!donation_amount) {
      setValue("donation_amount", 0);
    }
  }, [currency]);

  const onSubmit = (data: TAmountFormSchema) => {
    if (data) {
      setFormStep(2);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <div className="flex items-center text-gray-700 font-medium gap-4 pb-2">
          <select
            {...register("currency")}
            className="w-full rounded-none px-5 font-bold h-12 form-input"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="UGX">UGX</option>
          </select>
        </div>

        {/**
         * Quick donation
         */}
        <div className="flex flex-wrap gap-3 pt-5">
          {quickAmounts.map((amount) => {
            let newAmount = amount;

            if (currency === "UGX") {
              newAmount = newAmount * 3600;
            }

            return (
              <button
                type="button"
                onClick={() => setValue("donation_amount", newAmount)}
                key={newAmount}
                className={`px-4 py-2  font-semibold border transition-all duration-200 flex items-center ${
                  donation_amount === newAmount
                    ? "bg-yellow-500 text-white "
                    : "bg-white text-gray-700"
                }`}
              >
                {formatCurrency(newAmount, currency)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="form-input-container">
        <div className="absolute top-1/2 left-6 -translate-1/2">
          {currency === "USD" ? (
            <DollarSign className="size-4" />
          ) : currency === "EUR" ? (
            <Euro className="size-4" />
          ) : currency === "GBP" ? (
            <PoundSterling className="size-4" />
          ) : (
            <span className="font-bold">USh</span>
          )}
        </div>
        <input
          placeholder={`Enter amount from ${
            currency === "UGX"
              ? formatCurrency(7500, "UGX")
              : formatCurrency(quickAmounts[0], currency)
          }`}
          type="number"
          {...register("donation_amount", { valueAsNumber: true })}
          className="form-input font-bold text-lg py-1 rounded-none pl-12"
        />
      </div>

      {errors.donation_amount && (
        <div className="form-input-error-container">
          <p>{errors.donation_amount.message}</p>
        </div>
      )}

      {/*
       * Converted amount in UGX
       */}
      {/* {currency !== "UGX" && (
        <div>
          <div className="flex items-center gap-5 text-lg bg-black p-3 text-white">
            <p>
              {formatCurrency(
                exchangeRate ? donation_amount * exchangeRate : donation_amount,
                "UGX"
              )}
            </p>
          </div>
        </div>
      )} */}

      <CustomBtn
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-foreground font-semibold py-3 transition-colors duration-200"
      >
        <span>Next Step</span>
      </CustomBtn>
    </form>
  );
};

export default DonationAmountForm;

// 'Resolver<{ currency: $InferEnumInput<{ USD: "USD"; EUR: "EUR"; GBP: "GBP"; UGX: "UGX"; }>; donation_amount: unknown; }, any, { currency: $InferEnumOutput<{ USD: "USD"; EUR: "EUR"; GBP: "GBP"; UGX: "UGX"; }>; donation_amount: number; }>' is not assignable to type 'Resolver<{ currency: $InferEnumOutput<{ USD: "USD"; EUR: "EUR"; GBP: "GBP"; UGX: "UGX"; }>; donation_amount: number; }, any, { currency: $InferEnumOutput<{ USD: "USD"; EUR: "EUR"; GBP: "GBP"; UGX: "UGX"; }>; donation_amount: number; }>'.
