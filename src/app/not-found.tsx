import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#739B3E]">404</h1>
        <Link
          href="/"
          className="border border-[#739B3E] text-[#739B3E] px-6 py-2 rounded-md mt-5 inline-block"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
