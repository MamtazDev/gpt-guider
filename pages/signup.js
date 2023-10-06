import Link from "next/link";
import React from "react";
import imageIcon from "@/assets/icons/GoogleIcon.png";
import logo from "../assets/images/logo.svg";
import avatar1 from "@/assets/images/Avatar1.png";
import avatar2 from "@/assets/images/Avatar2.png";
import avatar3 from "@/assets/images/Avatar3.png";
import avatar4 from "@/assets/images/Avatar4.png";
import avatar5 from "@/assets/images/Avatar5.png";

const SignUpPage = () => {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
      <div className="lg:col-span-4 hidden md:flex justify-center items-center">
        <div className="px-[40px]">
          <img src={logo.src} alt="" className="w-[250px] mb-5" />
          <p className="text-lg mb-3">powerd by Gpt-3.5 & GPT-4</p>
          <div className="flex gap-[12px] items-center flex-wrap">
            <div className="flex -space-x-[12px]">
              <img
                className="inline-block h-[26px] w-[26px] rounded-full "
                src={avatar1.src}
                alt=""
              />
              <img
                className="inline-block h-[26px] w-[26px] rounded-full "
                src={avatar2.src}
                alt=""
              />
              <img
                className="inline-block h-[26px] w-[26px] rounded-full "
                src={avatar3.src}
                alt=""
              />
              <img
                className="inline-block h-[26px] w-[26px] rounded-full "
                src={avatar4.src}
                alt=""
              />
              <img
                className="inline-block h-[26px] w-[26px] rounded-full "
                src={avatar5.src}
                alt=""
              />
            </div>
            <p className="text-[18px] font-[600] ">
              Trusted by more than 100K <span className="userText">users</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white lg:col-span-3 flex justify-center items-center">
        <div className="px-[40px]">
          <form>
            <h4 className="text-black text-3xl font-bold mb-[40px]">
              Please SignUp!
            </h4>
            {/* <p>Welcome Back</p> */}
            <div className="flex flex-col gap-[15px]">
              <input
                className="w-full border rounded-[30px] px-[20px] py-[15px] outline-0 text-gray-500"
                type="text"
                name=""
                placeholder="User Name"
              />
              <input
                type="tel"
                name=""
                placeholder="Phone Number"
                className="w-full border rounded-[30px] px-[20px] py-[15px] outline-0 text-gray-500"
              />
              <input
                type="text"
                name=""
                placeholder="Country"
                className="w-full border rounded-[30px] px-[20px] py-[15px] outline-0 text-gray-500"
              />
              <input
                type="password"
                name=""
                placeholder="Password"
                className="w-full border rounded-[30px] px-[20px] py-[15px] outline-0 text-gray-500"
              />
              <input
                type="password"
                name=""
                placeholder="Confirm Password"
                className="w-full border rounded-[30px] px-[20px] py-[15px] outline-0 text-gray-500"
              />
            </div>
            <div className="text-black flex gap-2 text-sm mt-2">
              <input type="checkbox" name="" />
              <p>
                By Creating an account you agree to out{" "}
                <span className="text-[#07091e] font-semibold">
                  Trems of Service
                </span>{" "}
                and{" "}
                <span className="text-[#07091e] font-semibold">
                  Privacy Policy
                </span>{" "}
              </p>
            </div>
            <button className="bg-[#07091e] w-full rounded-[30px] py-[15px] text-lg font-semibold mt-[35px]">
              GET STARTED FOR FREE
            </button>
          </form>
          <button className="text-black w-full border rounded-[30px] py-[15px] text-lg font-semibold mt-[15px] flex justify-center items-center gap-2">
            <img src={imageIcon.src} alt="" /> CONTINUE WITH GOOGLE
          </button>
          <div className="text-black text-center mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-[#07091e] font-semibold">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
