import React from "react";

// components
import Networks from "@/components/Networks";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Networks",
  description: "",
};

const page = () => {
  return (
    <div>
      <Networks />
    </div>
  );
};

export default page;
