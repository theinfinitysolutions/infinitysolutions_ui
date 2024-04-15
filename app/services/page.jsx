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
        <div className="flex flex-col justify-center items-center my-[10vh]">
          <p className="text-sm text-center md:text-2xl">
            {
              "Like our work ? , reach out to us and let us build the best solution for your product"
            }
          </p>
          <div className=" flex w-full md:max-w-lg items-center justify-center mt-4">
            <div className="relative z-10 flex w-[35vw] md:w-[10vw] cursor-pointer items-center overflow-hidden rounded-full border border-[#0097b255] p-[1.5px] shadow-[0_8px_48px_4px_rgba(0,151,178,0.2)]">
              <div className=" animate-rotate absolute inset-0 h-full w-full rounded-full  bg-[conic-gradient(#0097b2_20deg,transparent_120deg)]"></div>
              <div className="relative z-20 flex flex-row justify-center w-full items-center rounded-full bg-black hover:bg-[#121212] px-2 py-2 md:px-4 md:py-2">
                <p className="relative z-50 w-full block rounded-lg border border-black bg-black  text-center text-[12px] md:text-sm text-primaryText shadow-2xl transition duration-200">
                  Contact Us
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-primaryText"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
