import * as z from "zod";

export const donationSchema = z
  .object({
    donor_email: z.string().email({ message: "Invalid email address." }),
    preferred_donor_name: z
      .string()
      .min(4, { message: "Preferred name must be at least 4 characters long." })
      .max(20, {
        message: "Preferred name must be less than 20 characters long.",
      }),
    currency: z.enum(["USD", "EUR", "GBP", "UGX"]),
    donation_amount: z.preprocess((val) => {
      if (typeof val === "string") {
        const parsed = Number(val);
        return isNaN(parsed) ? undefined : parsed;
      }
      return val;
    }, z.number({ message: "Donation amount must be a number." }).positive("Donation amount must be a positive number.")),
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

export const needHelpSchema = z.object({
  full_name: z
    .string()
    .min(6, "Full name must be at least 6 characters")
    .max(50, "Full name cannot exceed 50 characters"),
  contact: z.string().min(6, "Please provide email or phone"),
  how_hear: z.string().min(2, "Please select an option"),
  subject: z
    .string()
    .min(20, "Subject must be at least 20 characters")
    .max(50, "Subject cannot exceed 50 characters"),
  content: z
    .string()
    .min(300, "Content must be at least 300 characters")
    .max(650, "Content cannot exceed 650 characters"),
  location: z.string().min(2, "Please provide a location"),
});

export const newsletterSchema = z.object({
  preffered_name: z
    .string()
    .min(4, { message: "Preffered name but be more than 4 characters." }),
  email: z
    .string()
    .email({ message: "Invalid email Address." })
    .min(4, { message: "Preffered name but be more than 4 characters." }),
});
