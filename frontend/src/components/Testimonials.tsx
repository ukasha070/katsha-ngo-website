"use client";

import React from "react";

/**
 * component
 */
import Link from "next/link";
import SectionHead from "./SectionHead";
import { PlusSquare } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TestimonialCard from "./cards/TestimonialCard";

import GenericCarousel from "./GenericCarousel";
import { CarouselItem } from "./ui/carousel";
import CustomLink from "./buttons/CustomLink";

export const testimonials = [
  {
    profile_link: "https://example.com/profile3",
    photo: "/user5.webp",
    name: "Alice Johnson",
    job_title: "UX Designer",
    content:
      "Working with this team was a game-changer for my project. Their creative insights and attention to detail helped bring my vision to life. I appreciated their collaborative approach and how they incorporated my feedback throughout the design process.",
  },
  {
    profile_link: "https://example.com/profile1",
    photo: "/user-icon.png",
    name: "John Doe",
    job_title: "Software Engineer",
    content:
      "This service was fantastic! From the moment I reached out, the team was attentive and responsive. They understood my needs and delivered",
  },
  {
    profile_link: "https://example.com/profile2",
    photo: "/user2.webp",
    name: "Jane Smith",
    job_title: "Product Manager",
    content:
      "An excellent experience from start to finish. The professionalism and expertise displayed by the team were remarkable.",
  },

  {
    profile_link: "https://example.com/profile4",
    photo: null,
    name: "Michael Brown",
    job_title: "Marketing Specialist",
    content:
      "I cannot speak highly enough of the service I received. The team was not only knowledgeable but also genuinely interested in helping me achieve my goals. They provided strategic advice that significantly improved my marketing efforts. I am thrilled with the results!",
  },
  {
    profile_link: "https://example.com/profile5",
    photo: null,
    name: "Emily Davis",
    job_title: "Business Analyst",
    content:
      "This experience was truly outstanding! The level of support and expertise offered was unparalleled. Every question I had was answered promptly, and the end product was tailored perfectly to my requirements. I have already recommended their services to several colleagues!",
  },
];

const Testimonials = ({
  title,
  subTitle,
}: {
  title?: string;
  subTitle?: string[];
}) => {
  return (
    <section>
      <div className="my-12 py-8">
        <MaxWidthWrapper>
          <SectionHead
            className="justify-center items-center mx-auto text-center"
            title={title ?? "Testimonials"}
            subTitles={
              subTitle ?? [
                "Hear real stories from people whose lives and communities have been touched by our work.",
                "Your voice matters. If our work has made a difference in your life or community, you can add your own testimony today and inspire others to join the cause.",
              ]
            }
          >
            <div className="mt-3 w-fit">
              <CustomLink
                title="Testify"
                href={"/testimonials#testimonial-form"}
                Icon={PlusSquare}
                className="bg-yellow-600 flex gap-2 items-center p-3 px-5"
              />
            </div>
          </SectionHead>

          <GenericCarousel contentClassName="items-end">
            {testimonials.map((testimonialItem, testimonialIndex) => (
              <CarouselItem
                className="w-full basis-full md:basis-1/2 lg:basis-1/3 flex justify-center ml-7"
                key={testimonialIndex}
              >
                <TestimonialCard {...testimonialItem} />
              </CarouselItem>
            ))}
          </GenericCarousel>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Testimonials;
