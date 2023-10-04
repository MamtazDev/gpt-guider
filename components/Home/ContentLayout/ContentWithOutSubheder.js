import React from "react";
import bulletPoint from "@/assets/icons/bulletPoint.svg";

const ContentWithOutSubheder = ({ data, styles }) => {
  return (
    <section className="container grid grid-cols-2  gap-[33px] items-center my-[120px]">
      {!styles && (
        <div>
          <img src={data.image} alt="" />
        </div>
      )}
      <div className="">
        <h3 className="text-[36px] font-[700] mb-[24px]">{data?.title}</h3>
        <div className="flex flex-col gap-[24px] ">
          {data?.contents.map((item, idx) => (
            <div className="flex gap-[12px] items-start" key={idx}>
              <img
                src={bulletPoint.src}
                alt=""
                className="w-[16px] h-[16px] mt-[3px]"
              />
              <p className="text-[18px] font-[500]">{item}</p>
            </div>
          ))}
        </div>
      </div>
      {styles && (
        <div>
          <img src={data.image} alt="" />
        </div>
      )}
    </section>
  );
};

export default ContentWithOutSubheder;
