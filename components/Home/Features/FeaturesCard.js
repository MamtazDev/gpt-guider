import React from "react";
import icon from "../../../assets/icons/documentIcon.svg";
import Link from "next/link";

const FeaturesCard = ({ item, index }) => {
  const animationName = "fade-right";
  return (
    <Link
      href={`${item?.link}`}
      className="text-center flex flex-col  items-center featuresCard px-[41px] pb-[32px]"
      data-aos={animationName}
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <img src={item.icon} alt="" />
      <h4 className="text-[24px] font-[700] mb-[24px]">{item.title}</h4>
      <p className="text-[16px] font-[500]">{item?.description}</p>
    </Link>
  );
};

export default FeaturesCard;
