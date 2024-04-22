"use client";
import React, { useState, useLayoutEffect } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { DeliveryItems } from "@/utils/consts";
import Image from "next/image";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className=" absolute bottom-0 flex flex-row z-10 ">
      <a
        onClick={() => {
          swiper.slidePrev();
        }}
        className="cursor-pointer border-[1px] border-primaryColor rounded-full p-2 mr-2"
      >
        <GrLinkPrevious className="text-xl text-white" />
      </a>
      <a
        onClick={() => {
          swiper.slideNext();
        }}
        className="cursor-pointer border-[1px] border-primaryColor rounded-full p-2 mr-2"
      >
        <GrLinkNext className="text-xl text-white" />
      </a>
    </div>
  );
};

const Delivery = () => {
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
    <div className={" w-10/12 mt-[5vh] animate-slideUp  py-8 2xl:py-2"}>
      <div className="flex flex-col md:flex-row w-full ">
        <div className="flex flex-col w-full md:w-1/4">
          <h2 className="text-primaryColor text-bold text-3xl md:text-[2.5rem] md:leading-[2.5rem]">
            {"Delivering Excellence to Transform Businesses"}
          </h2>
          <div className="w-1/2 border-[1px] border-primaryColor my-6" />
          <p className=" text-sm md:text-lg text-primaryText/80 leading-[1.75rem]">
            {
              "Are you wondering what sets us apart as the leading software solutions company? It's our unwavering commitment to our core values that truly make a difference."
            }
          </p>
        </div>
        <div className="flex flex-row w-full mt-[5vh] md:mt-0 md:w-3/4 md:pl-8 h-[45vh] md:h-[60vh] 2xl:h-[55vh]">
          <Swiper
            slidesPerView={mobile ? 1 : 3}
            spaceBetween={50}
            loop={true}
            className="mySwiper"
          >
            <SwiperButtons />
            {DeliveryItems.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-start justify-center">
                    <div className=" w-full md:w-[20vw] h-[20vh] md:h-[30vh] relative">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-[50%] h-[50%] object-cover"
                      />
                    </div>
                    <h3 className="text-primaryColor text-bold text-start text-[1.25rem] leading-[1.25rem] mt-4">
                      {item.title}
                    </h3>
                    <div className="w-1/2 border-[1px] border-primaryColor/50 my-4" />
                    <p className="text-primaryText/80 text-md leading-[1.1rem] ">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
