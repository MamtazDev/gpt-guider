import React from "react";
import logo from "../assets/images/logo.svg";
import Link from "next/link";
const LoginPage = () => {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
      <div className="lg:col-span-4 hidden md:flex justify-center items-center">
        <div className="px-[40px]">
          <img src={logo.src} alt="" className="w-[250px] mb-5" />
          <p className="text-lg mb-2">powerd by Gpt-3.5 & GPT-4</p>
          <p className="text-lg mb-2">
            we will take the part of trusted by more than 100k user in the first
            section
          </p>
        </div>
      </div>
      <div className="bg-white lg:col-span-3 flex justify-center items-center">
        <div className="w-full md:w-[600px] px-[40px]">
          <form>
            <h4 className="text-black text-3xl font-bold mb-5">Hello Again!</h4>
            <p className="text-black mb-10">Welcome Back</p>
            <div className="flex flex-col gap-[15px]">
              <input
                className="w-full border rounded-[30px] px-[20px] py-[15px] outline-0 text-gray-500"
                type="text"
                name=""
                placeholder="User Name"
              />

              <input
                type="password"
                name=""
                placeholder="Password"
                className="w-full border rounded-[30px] px-[20px] py-[15px] outline-0 text-gray-500"
              />
              <label className="text-black text-sm">
                {" "}
                Forgot password?{" "}
                <Link href="#" className="text-[#07091e] font-semibold">
                  Reset
                </Link>
              </label>
            </div>
            <button className="bg-[#07091e] w-full rounded-[30px] py-[15px] text-lg font-semibold mt-[35px]">
              Login
            </button>
          </form>

          <div className="text-black text-center mt-5">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#07091e] font-semibold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
