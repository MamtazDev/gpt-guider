import React from "react";
import footerLogo from "@/assets/images/FooterLogo.svg";
import Link from "next/link";
import faceBookIcon from "@/assets/icons/facebook.svg";
import linkedinIcon from "@/assets/icons/Linkedin.svg";
import twitterIcon from "@/assets/icons/Twitter.svg";

const Footer = () => {
  return (
    <footer className="container pb-[90px]">
      <div className="grid md:grid-cols-6 lg:grid-cols-9  border-b border-[#515361] pb-[40px]">
        <div className="md:col-span-2 md:row-span-2 mb-[20px] lg:mb-0">
          <img src={footerLogo.src} alt="" />
        </div>
        <div className="flex flex-col gap-[24px] md:col-span-2 mb-[20px] lg:mb-0">
          <Link href="/" className="text-[18px] font-[700]">
            Home
          </Link>
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">About us</Link>
        </div>
        <div className="flex flex-col gap-[24px] md:col-span-2 mb-[20px] lg:mb-0">
          <Link href="/" className="text-[18px] font-[700]">
            Terms
          </Link>
          <Link href="/privacyPolicy">Privacy Policy</Link>
          <Link href="/termsAndConditions">Terms and Conditions</Link>
          <Link href="/">Copyright Policy</Link>
          <Link href="/">Security</Link>
        </div>
        <div className="flex flex-col gap-[24px] md:col-span-2 mb-[20px] lg:mb-0">
          <Link href="/" className="text-[18px] font-[700]">
            Support
          </Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/">Contact us</Link>
          <Link href="/">Help</Link>
        </div>
        <div>
          <p className="mb-[24px] text-[18px] font-[700]">Follow us</p>
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
