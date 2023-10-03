import React from "react";
import icon from "../../../assets/icons/documentIcon.svg";

const FeaturesCard = ({ item }) => {
  return (
    <div className="text-center flex flex-col  items-center singInButton px-[41px] pb-[32px]">
      <img src={item.icon} alt="" />
      <h4 className="text-[24px] font-[700] mb-[24px]">{item.title}</h4>
      <p className="text-[16px] font-[500]">{item?.description}</p>
    </div>
  );
};

export default FeaturesCard;
