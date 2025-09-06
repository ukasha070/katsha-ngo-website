"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Phone,
  User,
  FileText,
  MessageSquare,
  Layers,
} from "lucide-react";
import SectionHead from "../SectionHead";
import MaxWidthWrapper from "../MaxWidthWrapper";
import CustomBtn from "../buttons/CustomBtn";

// Zod schema for validation
const helpSchema = z
  .object({
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
  })
  .refine(
    (data) => (data.contactMethod === "email" ? data.email : data.phone),
    {
      message: "Provide a valid email or phone depending on your selection",
      path: ["contactMethod"],
    }
  );

type HelpFormData = z.infer<typeof helpSchema>;

export default function NeedHelpForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<HelpFormData>({ resolver: zodResolver(helpSchema) });

  const contactMethod = watch("contactMethod");

  async function onSubmit(data: HelpFormData) {
    setSubmitting(true);
    try {
      // Replace with API call
      await new Promise((r) => setTimeout(r, 1000));
      alert("Form submitted successfully! (demo)");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-2xl border border-gray-200 bg-white/70 px-4 py-3 shadow-sm outline-none focus:ring-4 focus:ring-yellow-600/30 focus:border-yellow-600 transition";

  return (
    <MaxWidthWrapper className="relative isolate my-16">
      <div className="flex flex-col lg:flex-row items-start gap-10 divide-y lg:divide-y-0 lg:divide-x">
        <div className="max-w-3xl lg:basis-1/2 2xl:basis-4/6 lg:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <SectionHead
              title="Need Help"
              subTitles={[
                "Fill in the form below to request support. Choose your project type and how we can reach you.",
              ]}
            />

            <div className="relative overflow-hidden">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-6 max-sm:px-4"
              >
                {/* Project Type */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-800">
                    Project Type
                  </span>
                  <div className="relative">
                    <Layers className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      {...register("projectType")}
                      className={`${inputBase} pl-10`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a project type
                      </option>
                      <option value="project fund">Project Fund</option>
                      <option value="school">School</option>
                      <option value="health">Health</option>
                      <option value="mentorship">Mentorship</option>
                      <option value="law">Law</option>
                      <option value="software">Software</option>
                      <option value="development">Development</option>
                      <option value="partnership">Partnership</option>
                      <option value="religion">Religion</option>
                    </select>
                  </div>
                  {errors.projectType && (
                    <p className="form-error">{errors.projectType.message}</p>
                  )}
                </label>

                {/* Name */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-800">
                    Full Name
                  </span>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      {...register("name")}
                      placeholder="e.g., John Doe"
                      className={`${inputBase} pl-10`}
                    />
                  </div>
                  {errors.name && (
                    <p className="form-error">{errors.name.message}</p>
                  )}
                </label>

                {/* Contact Method */}
                <div>
                  <span className="mb-2 block text-sm font-medium text-gray-800">
                    Preferred Contact
                  </span>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="email"
                        {...register("contactMethod")}
                      />
                      <span>Email</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        value="phone"
                        {...register("contactMethod")}
                      />
                      <span>Phone</span>
                    </label>
                  </div>
                  {contactMethod === "email" && (
                    <div className="relative mt-3">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        {...register("email")}
                        placeholder="you@example.com"
                        className={`${inputBase} pl-10`}
                      />
                    </div>
                  )}
                  {contactMethod === "phone" && (
                    <div className="relative mt-3">
                      <Phone className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        {...register("phone")}
                        placeholder="e.g., 256700000000"
                        className={`${inputBase} pl-10`}
                      />
                    </div>
                  )}
                  {(errors.email || errors.phone) && (
                    <p className="form-error">
                      {errors.email?.message || errors.phone?.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-800">
                    Subject
                  </span>
                  <div className="relative">
                    <FileText className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      {...register("subject")}
                      placeholder="Brief subject"
                      className={`${inputBase} pl-10`}
                    />
                  </div>
                  {errors.subject && (
                    <p className="form-error">{errors.subject.message}</p>
                  )}
                </label>

                {/* Message */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-gray-800">
                    Message
                  </span>
                  <div className="relative">
                    <MessageSquare className="pointer-events-none absolute left-3 top-5 h-5 w-5 text-gray-400" />
                    <textarea
                      {...register("message")}
                      rows={4}
                      maxLength={320}
                      placeholder="Write your request (max 320 characters)"
                      className={`${inputBase} resize-none pl-10`}
                    />
                  </div>
                  {errors.message && (
                    <p className="form-error">{errors.message.message}</p>
                  )}
                </label>

                {/* Submit */}
                <CustomBtn className="px-4 py-4 w-full" disabled={submitting}>
                  <p>Submit Request</p>
                </CustomBtn>
              </form>
            </div>
          </motion.div>
        </div>

        {/* here is the margin */}
        <div className="basis-full lg:basis-1/2 2xl:basis-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          inventore distinctio iure fugit enim! Totam, modi! Optio hic iure
          magni temporibus aliquid velit corrupti dicta libero, architecto,
          dolorum repellat similique?
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
