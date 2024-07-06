import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

const ImgBox = ({ image, title, link }) => {
  return (
    <div className="flex h-full w-full relative group z-0 flex-col justify-center items-center overflow-hidden rounded-md">
      <Image
        layout="fill"
        src={process.env.NEXT_PUBLIC_API_URL + image}
        className="-z-10"
      />
      <div className=" md:hidden flex w-full h-full bg-black/60  md:group-hover:flex md:group-hover:bg-black/60 md:group-hover:animate-slideUpSmall flex-col items-center justify-center">
        <p className=" text-primaryText text-lg">{title}</p>
        <a
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="flex flex-row items-center justify-end"
        >
          <p className="text-primaryText text-sm mx-2 underline">Visit</p>
          <FiExternalLink color={"#fff"} />
        </a>
      </div>
    </div>
  );
};

export default ImgBox;
