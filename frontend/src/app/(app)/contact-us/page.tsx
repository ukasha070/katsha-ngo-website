import React from "react";
import { Metadata } from "next/types";

// components
import ContactPage from "@/components/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "",
};

const page = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default page;
