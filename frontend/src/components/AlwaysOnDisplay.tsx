"use client";
import React from "react";

// components
import AppSidebar from "./header/AppSidebar";
import SearchForm from "./forms/SearchForm";
import ScrollToTopBtn from "./buttons/ScrollToTopBtn";

// hooks
import { useScrollToHash } from "@/hooks/useScrollToHash";

const AlwaysOnDisplay = () => {
  useScrollToHash();
  return (
    <>
      <AppSidebar />
      <SearchForm />
      <ScrollToTopBtn />
    </>
  );
};

export default AlwaysOnDisplay;
