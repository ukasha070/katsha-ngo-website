import * as z from "zod";

export const donationSchema = z.object({
  donor_email: z.string().email({ message: "Invalid email address." }),
  donor_name: z
    .string()
    .min(4, { message: "Preferred name must be at least 4 characters long." })
    .max(20, { message: "Preferred name must be less than 20 characters long." }),
  donation_amount: z
    .number()
    .min(1, { message: "Donation amount is required." })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Donation amount must be a positive number.",
    })
    .transform((val) => Number(val)), 
});

export type donationSchemeType = z.infer<typeof donationSchema>

  export const needHelpSchema = z.object({
    projectType: z.string().min(1, "Please select a project type"),
    name: z.string().min(2, "Name is required"),
    contactMethod: z.enum(["email", "phone"]),
    email: z.string().email("Invalid email").optional(),
    phone: z
    .string()
    .regex(/^[0-9]{9,15}$/g, "Phone number must be 9–15 digits")
    .optional(),
    subject: z.string().min(3, "Please enter a subject"),
    message: z
    .string()
    .min(10, "Message too short")
    .max(320, "Message must be under 320 characters"),
    }).refine(
    (data) => (data.contactMethod === "email" ? data.email : data.phone),
    {
    message: "Provide a valid email or phone depending on your selection",
    path: ["contactMethod"],
    }
    );

export const newsletterSchema = z.object({
  preffered_name: z
    .string()
    .min(4, { message: "Preffered name but be more than 4 characters." }),
  email: z
    .string()
    .email({ message: "Invalid email Address." })
    .min(4, { message: "Preffered name but be more than 4 characters." }),
});


export const testimonialSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  job: z.string().min(2, "Job title is required"),
  profile: z.string().url("Enter a valid profile link"),
  testimonial: z.string().min(10, "Testimonial is too short"),
  image: z.any().optional(),
  });
