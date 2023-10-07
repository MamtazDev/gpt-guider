import GptLayout from "@/Layouts/GptLayout";
import React from "react";
import { IoMdSend } from "react-icons/io";

const ChatGPTPage = () => {
  return (
    <div className="w-10/12 h-screen overflow-y-scroll bg-white relative">
      <div className=" absolute  left-[50%] -translate-x-[50%] rounded-[10px] w-[40vw] h-[50px] shadow-md border px-3 flex items-center bottom-[30px]">
        <input
          type=""
          name=""
          placeholder="Send a message"
          className="outline-0 w-full h-full text-black"
        />
        <IoMdSend className="text-[#dedee5] text-xl cursor-pointer" />
      </div>
    </div>
  );
};

ChatGPTPage.PageLayout = GptLayout;
export default ChatGPTPage;
