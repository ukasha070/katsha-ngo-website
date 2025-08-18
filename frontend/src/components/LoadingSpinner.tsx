import React from "react";
import { Logo } from "./Icon";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-32 bg-gray-100">
      {/* Outer container */}
      <div className="relative w-24 h-24">
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-yellow-500 border-t-transparent border-l-transparent border-r-transparent animate-spin"></div>

        {/* Inner circle with logo */}
        <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow">
          <Logo />
        </div>
      </div>
    </div>
  );
}
