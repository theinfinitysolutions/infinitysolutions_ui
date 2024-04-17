"use client";
import React, { useState, useLayoutEffect } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { lifecycleItems } from "@/utils/consts";
import Image from "next/image";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

export const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className=" absolute z-20 top-[40%] w-full opacity-50 md:opacity-100 md:top-1/2 left-0  md:w-full  flex flex-row justify-between">
      <a
        onClick={() => {
          swiper.slidePrev();
        }}
        className="cursor-pointer border-[1px] bg-black border-primaryColor rounded-full p-2"
      >
        <GrLinkPrevious className="text-2xl text-white" />
      </a>
      <a
        onClick={() => {
          swiper.slideNext();
        }}
        className="cursor-pointer border-[1px] bg-black border-primaryColor rounded-full p-2"
      >
        <GrLinkNext className="text-2xl text-white" />
      </a>
    </div>
  );
};

const Lifecycle = () => {
  const [mobile, setMobile] = React.useState(false);

  useLayoutEffect(() => {
    let height = window.innerHeight;
    let width = window.innerWidth;

    if (height > width) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <div
      className={
        " w-full flex flex-col items-center mt-[10vh] animate-slideUp  py-8 2xl:py-2"
      }
    >
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-row w-11/12 md:w-10/12 justify-between items-end">
          <div className="flex flex-col w-full md:w-3/4">
            <h2 className="text-primaryColor text-bold text-3xl md:text-[2.5rem] md:leading-[2.5rem]">
              {
                "Offering Exclusive Edge Following Custom Software Development Lifecycle"
              }
            </h2>
            <div className="w-1/4 border-[1px] border-primaryColor my-6" />
            <p className=" text-sm md:text-lg text-white leading-[1.75rem]">
              {
                "Are you wondering what sets us apart as the leading software solutions company? It's our unwavering commitment to our core values that truly make a difference."
              }
            </p>
          </div>
        </div>
        <div className="flex flex-row w-11/12 mt-[5vh] md:h-[40vh] 2xl:h-[35vh]">
          <Swiper
            onSwiper={(swiper) => console.log("swiper", swiper)}
            slidesPerView={mobile ? 1 : 3}
            spaceBetween={50}
            loop={true}
            style={{ padding: "0 5%" }}
            className="mySwiper w-full h-full"
          >
            {lifecycleItems.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col  justify-center items-center w-full  md:h-full border-[1px] border-primaryColor rounded-md">
                    {/* <div className=" absolute w-full h-full -z-10">
                      <Image
                        src={"/innovative.png"}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="object-cover opacity-25"
                      />
                    </div> */}
                    <div className="flex flex-col w-10/12 justify-center h-full py-8">
                      <h3 className="text-3xl w-12 h-12 flex justify-center items-center rounded-full border-[1px] border-white text-primaryColor">
                        {index + 1}
                      </h3>
                      <h3 className="text-primaryColor text-bold text-start text-[1.5rem] leading-[1.5rem] mt-8 md:mt-[5vh]">
                        {item.title}
                      </h3>
                      <div className="w-1/2 border-[1px] border-primaryColor/50 my-4" />
                      <p className="text-white text-md leading-[1.5rem] ">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperButtons />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Lifecycle;
