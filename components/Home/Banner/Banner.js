import React from "react";
import bannerImage from "@/assets/images/bannerImage.svg";
import avatar1 from "@/assets/images/Avatar1.png";
import avatar2 from "@/assets/images/Avatar2.png";
import avatar3 from "@/assets/images/Avatar3.png";
import avatar4 from "@/assets/images/Avatar4.png";
import avatar5 from "@/assets/images/Avatar5.png";

const Banner = () => {
  return (
    <section className="container mt-[119px] mb-[193px]">
      <div className="flex ">
        <div>
          <h3 className="text-[36px] font-[700]">
            Save Your Time <span className="andText">&</span> Study Faster
          </h3>
          <p className="mt-[20px] max-w-[565px] text-[22px] font-[400] leading-[30px]">
            Increase your productivity, Elevate your learning experience with
            the most comprehensive and powerful AI tools.
          </p>
          <button className="signUpButton py-[14px] px-[56px] mt-[65px]">
            Get Started
          </button>
        </div>
        <div>
          <img src={bannerImage.src} alt="" />
        </div>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="flex -space-x-[16px]">
          <img
            className="inline-block h-[36px] w-[36px] rounded-full "
            src={avatar1.src}
            alt=""
          />
          <img
            className="inline-block h-[36px] w-[36px] rounded-full "
            src={avatar2.src}
            alt=""
          />
          <img
            className="inline-block h-[36px] w-[36px] rounded-full "
            src={avatar3.src}
            alt=""
          />
          <img
            className="inline-block h-[36px] w-[36px] rounded-full "
            src={avatar4.src}
            alt=""
          />
          <img
            className="inline-block h-[36px] w-[36px] rounded-full "
            src={avatar5.src}
            alt=""
          />
        </div>
        <p className="text-[18px] font-[600]">
          Trusted by more than 100K <span className="userText">users</span>
        </p>
      </div>
    </section>
  );
};

export default Banner;
