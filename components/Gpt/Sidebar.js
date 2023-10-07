import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbLayoutSidebar } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="w-2/12 h-screen bg-[#202123] p-3">
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-3 py-2  border-[0.1px] border-gray-500 rounded-[6px] w-full">
          <AiOutlinePlus /> New Chat
        </button>
        <button className="px-3 py-2  border-[0.1px] border-gray-500 rounded-[6px]">
          <TbLayoutSidebar />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
