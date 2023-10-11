import React from "react";

const Subcriptions = () => {
  return (
    <div className="min-h-screen   flex flex-wrap items-center  justify-center  ">
      <div className="min-h-[500px] flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-col gap-[50px] justify-center items center  container   ">
        <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:w-full sm:w-full bg-white  rounded-xl">
          <h1 className="text-gray-500 font-semibold text-xl ">Free Trail</h1>
          <div className="text-center py-4 px-7">
            {/* <h1 className="text-gray-700 text-4xl font-black">$199.00</h1> */}
            <p className="text-gray-700 text-2xl font-black  mt-2">
              try our features for 3 days
            </p>
          </div>
          <div className="h-px bg-gray-200"></div>
          <div className="text-sm  text-gray-400 mt-3">
            <p>1- browsing plugin (20 massage )</p>
            <p> 2- diagram plugin 20 diagram &mind map</p>
            <p>
              3- chat with pdf including : (ocr & upload multiple pdf files){" "}
            </p>
            <p>4- summariztion</p>
            <p>5- question& answer generator (25 Q&A )</p>
          </div>
          <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-[#07091e] hover:shadow-xl duration-200 rounded-[30px]">
            Buy Now
          </button>
        </div>
        <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:w-full sm:w-full focusSubScriptionCard transform scale-1 sm:scale-1 md:scale-105 lg:scale-125 xl:scale-125   shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl rounded-xl">
          <h1 className="text-purple-200 font-semibold text-xl ">Standard </h1>
          <div className="text-center py-4 px-7">
            {/* <h1 className="text-white text-4xl font-black">$399.00</h1> */}
            <p className="text-white text-opacity-50 text-2xl font-black mt-2">
              149 EGYPTAIN pound
            </p>
          </div>
          <div className="h-px bg-[#68e2b4]"></div>
          <div className="text-sm text-white text-opacity-80 mt-3">
            <p>1- GPT Prof ( including explanition & discussion)</p>
            <p>2- browsing plugin (200 massage)</p>
            <p>3- daigram plugin (unlimited)</p>
            <p>4-chat with pdf (unlimited) </p>
            <p>5- summariztion ( unlimited) </p>
            <p>6- question and answer generator (300 Q&A) </p>
            <p>7- document ocr ai </p>
            <p>8- audio transcribtion & summariztion (soon)</p>
            <p>9- video transcribtion & summariztion (soon)</p>
            <p>10-youtube video transcribtion & summariztion (soon)</p>
          </div>
          <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-[#07091e] hover:shadow-xl duration-200  rounded-[30px]">
            Buy Now
          </button>
        </div>
        <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:w-full sm:w-full bg-white  rounded-xl">
          <h1 className="text-gray-500 font-semibold text-xl ">Premium</h1>
          <div className="text-center py-4 px-7">
            {/* <h1 className="text-gray-700 text-4xl font-black">$899.00</h1> */}
            <p className="text-gray-500 text-2xl font-black  mt-2">
              299 EGYPTAIN pound
            </p>
          </div>
          <div className="h-px bg-gray-200"></div>
          <div className="text-sm text-gray-400 text-center mt-3">
            <p>1- GPT prof ( including explanition & discussion)</p>
            <p>2- browsing plugin (unlimited)</p>
            <p>3- diagram plugin (unlimited)</p>
            <p>4-chat with pdf (unlimited)</p>
            <p>5- summariztion (unlimited )</p>
            <p>6- question & answer generator ( unlimited)</p>
            <p>7- document ocr ai (unlimited)</p>
            <p>8-audio transcribtion & summariztion (soon)</p>
            <p>9- video transcribtion & summariztion (soon)</p>
            <p>10-youtube video transcribtion & summariztion (soon)</p>
          </div>
          <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-[#07091e] hover:shadow-xl duration-200 rounded-[30px]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subcriptions;
