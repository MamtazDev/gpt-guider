import React from "react";
import bulletPoint from "@/assets/icons/bulletPoint.svg";

const ContentWithSubheader = ({ data }) => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 gap-[33px] mb-[120px] items-center">
      <div>
        <h3 className="text-[36px] font-[700] mb-[24px]">{data.title}</h3>
        {data?.contents.map((item, idx) => (
          <div className="flex gap-[12px] items-start mb-[24px]" key={idx}>
            <img
              src={bulletPoint.src}
              alt=""
              className="w-[16px] h-[16px] mt-[3px]"
            />
            <div>
              <p className="text-[18px] font-[700] mb-[12px]">{item?.header}</p>
              <p className="text-[18px] font-[400]">{item?.subHeader}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <img src={data.image} alt="" />
      </div>
    </section>
  );
};

export default ContentWithSubheader;
