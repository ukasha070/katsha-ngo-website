import React from "react";

// components
import SectionHead from "@/components/SectionHead";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TestimonialList from "@/components/List/TestimonialList";
import TestimonialForm from "@/components/forms/TestimonialForm";
import CustomBtn from "@/components/buttons/CustomBtn";
import { File } from "lucide-react";

const page = () => {
  return (
    <div>
      <MaxWidthWrapper className="py-16">
        <SectionHead
          title="Some Can Testify to Katsha Uganda"
          subTitles={["Every Day 14 Testimoials are listed here."]}
          className="mb-4"
        />
        <CustomBtn
          type="button"
          title="Fill Form to Testify"
          className="px-5 py-4 mb-12"
        >
          <p>Fill Form to Testify</p>
          <File className="size-4" />
        </CustomBtn>

        <TestimonialList />
      </MaxWidthWrapper>

      <TestimonialForm />
    </div>
  );
};

export default page;
