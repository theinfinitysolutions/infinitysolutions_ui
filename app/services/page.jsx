"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import { serviceList } from "@/utils/consts";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

const section = "Our Services";

const Services = () => {
  const [selectedHover, setSelectedHover] = React.useState(0);

  return (
    <div className="flex z-0 min-h-screen flex-col items-center justify-between">
      <div className="absolute z-100 flex flex-col w-full top-0 h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0097b244] via-[#0097b211] to-[#0097b200] "></div>
      <div className="absolute z-0 inset-0 h-full to-0 w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_60%,transparent_100%)]"></div>
      <div className="flex flex-col w-10/12 mt-[10vh] md:mt-[2.5vh]">
        <div className="flex flex-col  items-start">
          <h1 className="overflow-hidden text-[2rem] md:text-[3rem] text3d text-center font-bold leading-[3rem] text-primaryColor">
            {section.split("").map((char, index) => (
              <span
                className={`animate-slideUpSlow inline-block  [animation-fill-mode:backwards]`}
                key={`${char}-${index}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>
        <div className="flex flex-row w-full items-center justify-between md:mt-8">
          <div className="w-full md:w-8/12 h-[60vh]">
            <Swiper
              grabCursor={true}
              effect={"creative"}
              loop={true}
              pagination={{
                clickable: true,
              }}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-120%", 0, -500],
                },
                next: {
                  shadow: true,
                  translate: ["120%", 0, -500],
                },
              }}
              modules={[EffectCreative, Pagination]}
              className="mySwiper2 w-full h-full bg-transparent"
            >
              {serviceList.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full h-full">
                    <div
                      class={`[border-image:linear-gradient(to_right,#0087B2,#FFFFFF,#043357)_2] bg-primaryColor/10  w-full h-full border-[2px] p-4 md:p-8 ${
                        selectedHover > 0 || selectedHover < 10
                          ? "animate-slideUp"
                          : null
                      }`}
                    >
                      <h1 className="text-primaryColor/90 text-xl md:text-2xl animate-slideUpSmall">
                        {item.title}
                      </h1>
                      <p className=" text-sm md:text-md text-[#c7c7c7aa] mt-4 animate-slideUpSmall">
                        {item.description}
                      </p>
                      <p className="text-primaryColor text-md md:text-lg mt-4">
                        Applications
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2 mt-2 ">
                        {item.applications.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="bg-[#383e48] py-2 flex justify-center items-center rounded-3xl"
                            >
                              <p className="text-[10px] text-[#c7c7c7]">
                                {item}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-primaryColor mt-4">Tech Stack</p>
                      <div className="flex flex-row overflow-scroll mt-2">
                        {item.techStack.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="flex flex-col px-4 py-4 items-center border-[1px] rounded-xl mr-2 border-[#383e48]"
                            >
                              <div className=" h-[5vh] w-[5vh] md:h-[7.5vh] md:w-[7.5vh] relative">
                                <Image src={item.image} layout="fill" />
                              </div>
                              <p className="text-[#383e48] mt-2 text-md">
                                {item.title}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="hidden md:flex flex-col w-full md:w-4/12 group items-center justify-center px-8">
            {serviceList.map((item, index) => {
              return (
                <a
                  key={item.index}
                  onMouseEnter={() => {
                    debounce(() => {
                      setSelectedHover(index + 1);
                    }, 300)();
                  }}
                  className="flex  text-[#fff] group-hover:text-[#c7c7c755]   justify-start w-full  border-b-[1px] border-[#ffffff22] hover:border-[#ffffff44] transition-all duration-300 ease-in-out"
                >
                  <div className="hover:text-primaryText flex group/text flex-row items-start space-x-4 py-1">
                    <p className="text-[0.75rem] ">0{index + 1}</p>
                    <h1 className=" text-xl leading-[1.25rem] group-hover/text:translate-x-[20px] duration-200">
                      {item.title}
                    </h1>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
