import React, { useState } from "react";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="container pt-[24px]">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <img src={logo.src} alt="" />
          </Link>
        </div>
        <div className="lg:flex gap-[32px] text-[16px] font-[500] hidden">
          <Link href="/">Home</Link>
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">About us</Link>
        </div>
        <div className="lg:flex gap-[32px] hidden">
          <button className="singInButton px-[32px] py-[14px]">
            <Link href="/login">Sign in</Link>
          </button>
          <button className="signUpButton px-[32px] py-[14px]">
            <Link href="/signup">Sign up</Link>
          </button>
        </div>
        {/* mobile navbar button */}
        {/* <div
          className={`burgerContainer lg:hidden ${isOpen && "change"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div> */}
        <div
          className="burgerContainer lg:hidden "
          onClick={() => setIsOpen(true)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      {/* mobile navbar */}

      <div
        className="sideBar lg:hidden"
        style={{ width: `${isOpen ? "100%" : "0"}` }}
      >
        <div className="flex justify-end pr-[30px] pb-[30px]">
          <div
            className="burgerContainer lg:hidden change "
            onClick={() => setIsOpen(false)}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] text-[16px] font-[500] items-center">
          <Link href="/">Home</Link>
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">About us</Link>

          <button className="singInButton px-[32px] py-[14px] max-w-[120px] ">
            <Link href="/login">Sign in</Link>
          </button>
          <button className="signUpButton px-[32px] py-[14px] max-w-[125px]">
            <Link href="/signup">Sign up</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
