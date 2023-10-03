import React from "react";
import footerLogo from "@/assets/images/FooterLogo.svg";
import Link from "next/link";
import faceBookIcon from "@/assets/icons/facebook.svg";
import linkedinIcon from "@/assets/icons/Linkedin.svg";
import twitterIcon from "@/assets/icons/Twitter.svg";

const Footer = () => {
  return (
    <footer className="container">
      <div className="grid grid-cols-9  border-b border-[#515361] pb-[40px]">
        <div className="col-span-2">
          <img src={footerLogo.src} alt="" />
        </div>
        <div className="flex flex-col gap-[24px] col-span-2">
          <Link href="/">Home</Link>
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">About us</Link>
        </div>
        <div className="flex flex-col gap-[24px] col-span-2">
          <Link href="/">Terms</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms and Conditions</Link>
          <Link href="/">Copyright Policy</Link>
          <Link href="/">Security</Link>
        </div>
        <div className="flex flex-col gap-[24px] col-span-2">
          <Link href="/">Support</Link>
          <Link href="/">FAQs</Link>
          <Link href="/">Contact us</Link>
          <Link href="/">Help</Link>
        </div>
        <div>
          <p className="mb-[24px]">Follow us</p>
          <div className="flex gap-[12px]">
            <a href="https://twitter.com/" target="_blank">
              <img src={twitterIcon.src} alt="" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={faceBookIcon.src} alt="" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src={linkedinIcon.src} alt="" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-[#F7F6F2] text-[14px] font-[400] mt-[40px]">
        Copyright © 2023 GPT Guider All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
