"use client";

import React from "react";

// components
import { testimonials } from "../Testimonials";
import TestimonialCard from "../cards/TestimonialCard";

const TestimonialList = () => {
  return (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-end">
      {testimonials.map((testimonialItem, testimonialIndex) => (
        <div className="" key={testimonialIndex}>
          <TestimonialCard {...testimonialItem} />
        </div>
      ))}
    </div>
  );
};

export default TestimonialList;
