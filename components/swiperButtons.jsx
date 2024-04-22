import React from "react";
import { useSwiper } from "swiper/react";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

export const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className=" absolute z-20 w-full top-1/2 opacity-55 md:opacity-100 md:top-1/2 right-0  md:w-full  flex flex-row justify-between">
      <a
        onClick={() => {
          swiper.slidePrev();
        }}
        className="cursor-pointer border-[1px] bg-black border-primaryColor rounded-full p-2"
      >
        <GrLinkPrevious className=" text-xl md:text-2xl text-white" />
      </a>
      <a
        onClick={() => {
          swiper.slideNext();
        }}
        className="cursor-pointer border-[1px] bg-black border-primaryColor rounded-full p-2"
      >
        <GrLinkNext className="text-xl md:text-2xl text-white" />
      </a>
    </div>
  );
};
