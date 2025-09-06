import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const FullPageLoader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center -mt-21">
      <LoadingSpinner />
    </div>
  );
};

export default FullPageLoader;
