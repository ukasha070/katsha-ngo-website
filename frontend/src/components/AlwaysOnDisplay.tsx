import React from "react";
import AppSidebar from "./AppSidebar";
import SearchForm from "./forms/SearchForm";
import DonationForm from "./forms/DonationForm";

const AlwaysOnDisplay = () => {
  return (
    <>
      <AppSidebar />
      <SearchForm />
      <DonationForm />
    </>
  );
};

export default AlwaysOnDisplay;
