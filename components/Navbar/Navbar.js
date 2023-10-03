import React from "react";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="container pt-[24px]">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <img src={logo.src} alt="" />
          </Link>
        </div>
        <div className="flex gap-[32px] text-[16px] font-[500]">
          <Link href="/">Home</Link>
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">About us</Link>
        </div>
        <div className="flex gap-[32px]">
          <button className="singInButton px-[32px] py-[14px]">
            <Link href="/">Sign in</Link>
          </button>
          <button className="signUpButton px-[32px] py-[14px]">
            <Link href="/">Sign up</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
