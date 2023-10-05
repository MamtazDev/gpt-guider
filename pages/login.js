import React from "react";

const LoginPage = () => {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
      <div className="lg:col-span-4 hidden md:flex justify-center items-center">
        <div>
          <img src={logo.src} alt="" className="w-[250px] mb-5" />
          <p className="text-lg mb-2">powerd by Gpt-3.5 & GPT-4</p>
          <p className="text-lg mb-2">
            we will take the part of trusted by more than 100k user in the first
            section
          </p>
        </div>
      </div>
      <div className="bg-white lg:col-span-3 flex justify-center items-center">
        <div>
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

export default LoginPage;
