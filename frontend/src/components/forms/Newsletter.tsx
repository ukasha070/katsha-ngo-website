"use client";

import React from "react";

import z from "zod";

// components
import Image from "next/image";
import CustomBtn from "../buttons/CustomBtn";
import MaxWidthWrapper from "../MaxWidthWrapper";

// forms
import { useForm } from "react-hook-form";
import { newsletterSchema } from "@/schemes/schemes";
import { zodResolver } from "@hookform/resolvers/zod";

type TNewsletterSchema = z.infer<typeof newsletterSchema>;

const Newsletter = () => {
  const form = useForm<TNewsletterSchema>({
    resolver: zodResolver(newsletterSchema),
  });

  const errors = form.formState.errors;
  const isLoading = form.formState.isLoading;

  function onSubmit(data: TNewsletterSchema) {
    console.log(data);
  }
  return (
    <div id="newsletter-form">
      <MaxWidthWrapper className="my-12">
        <div className="h-fit w-full flex flex-col md:flex-row items-start md:items-end justify-start">
          <div className="w-11/12 md:w-6/12 lg:w-5/12 max-md:-mb-[6rem]">
            <div className="bg-accent p-6 md:p-10">
              <div className="mb-4">
                <h3 className="mb-3 text-2xl md:text-3xl font-bold">
                  Receive email updates
                </h3>

                <p className="text-black/60">
                  LFor nearly 90 years, the IRC has responded to the world's
                  worst humanitarian crises and helped people to survive and
                  rebuild their lives
                </p>
              </div>

              <form onSubmit={form.handleSubmit(onSubmit)} method="post">
                <div className="form-input-contaner mb-4">
                  <input
                    type="text"
                    {...form.register("preffered_name")}
                    className="form-input"
                    placeholder="Preffered Name"
                  />
                  {errors.preffered_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.preffered_name.message}
                    </p>
                  )}
                </div>

                <div className="form-input-contaner mb-4">
                  <input
                    type="mail"
                    placeholder="ukasha@gmail.com"
                    {...form.register("email")}
                    className="form-input"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <CustomBtn
                  type="submit"
                  disabled={isLoading}
                  loading={isLoading}
                  className="p-4 w-full text-center font-bold mb-5"
                >
                  <span>Subscribe</span>
                </CustomBtn>

                <div className="flex items-start gap-2">
                  <div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <p>
                      You will always be able to unsubscribe or change your
                      communication preferences. Read our{" "}
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/**
           * image
           */}
          <div className="w-full md:w-6/12 lg:w-8/12 h-[20rem] md:h-[22rem] -z-10">
            <Image
              src={"/background-about.webp"}
              alt="adfds"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Newsletter;
