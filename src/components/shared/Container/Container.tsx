import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1280px] w-full mx-auto lg:px-10 md:px-5 px-3">
      {children}
    </div>
  );
};

export default Container;
