import React from "react";

/**
 * utils
 */
import { splitIntoThreeLists } from "@/lib/utils";

/**
 * component
 */
import MaxWidthWrapper from "./MaxWidthWrapper";
import TestimonialCard from "./cards/TestimonialCard";

const testimonials = [
  {
    profile_link: "https://example.com/profile1",
    photo: "/images/photo1.png",
    name: "John Doe",
    job_title: "Software Engineer",
    content:
      "This service was fantastic! From the moment I reached out, the team was attentive and responsive. They understood my needs and delivered",
  },
  {
    profile_link: "https://example.com/profile2",
    photo: "/images/photo2.png",
    name: "Jane Smith",
    job_title: "Product Manager",
    content:
      "An excellent experience from start to finish. The professionalism and expertise displayed by the team were remarkable.",
  },
  {
    profile_link: "https://example.com/profile3",
    photo: "/images/photo3.png",
    name: "Alice Johnson",
    job_title: "UX Designer",
    content:
      "Working with this team was a game-changer for my project. Their creative insights and attention to detail helped bring my vision to life. I appreciated their collaborative approach and how they incorporated my feedback throughout the design process.",
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

const Testimonials = () => {
  const [col1, col2, col3] = splitIntoThreeLists(testimonials);

  return (
    <div>
      <MaxWidthWrapper>
        <div className="relative">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 pt-5 pb-20 -z-10">
            {[col1, col3, col2].map((col, i) => (
              <div key={i} className="space-y-8">
                {col.map((testimonialItem, testimonialIndex) => (
                  <TestimonialCard
                    key={testimonialIndex}
                    {...testimonialItem}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute w-full h-28 bg-gradient-to-t from-black/40 via-black/20 to-transparent -mt-[8rem] z-10 flex items-center justify-center">
              <button type="button">
                <p className="p-3 px-8 bg-yellow-500 font-bold">Load More</p>
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonials;
