import Sidebar from "@/components/Gpt/Sidebar";
import React from "react";

const GptLayout = ({ children }) => {
  return (
    <div className="flex w-full">
      <Sidebar />
      {children}
    </div>
  );
};

export default GptLayout;
