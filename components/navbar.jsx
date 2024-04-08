"use client";
import React from "react";
import { useRouter } from "next/navigation";

const navbarItems = [
  { title: "Home", link: "#Home" },
  { title: "Services", link: "#services" },
  { title: "About Us", link: "#aboutus" },
];

let navbarItemsClass =
  "relative  text-[0.9em] py-2 px-3 after:block after:content-[''] cursor-pointer after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-transparent h-[90px] flex flex-row w-full fixed top-0 px-[5%] pt-[2.5%] justify-between items-center z-10">
      <div className="hidden md:flex flex-row justify-between w-[25%] items-center border-[1px] px-6  rounded-full py-1 shadow- shadow-[0_4px_24px_1px_rgba(0,151,178,0.2)] border-[#0097b255]">
        {/* <div className="w-8/12 flex flex-row justify-between items-center"> */}
        {navbarItems.map((item, index) => {
          4;
          return (
            <a
              key={index}
              onClick={() => {
                //   window.scrollTo(item.link)
              }}
              className={
                `${navbarItemsClass}` +
                `${
                  index == 0
                    ? " block border-[1px] border-[#0097b299] text-white bg-[#0097b255] rounded-full"
                    : " text-[#0097b2]"
                }`
              }
            >
              {item.title}
            </a>
          );
        })}
        {/* </div> */}
      </div>
      <div className="flex flex-col justify-between items-center w-[20%]">
        <span className="text-xl md:text-4xl font-bold text-[#0097b2] before:translate-z-[10rem]">
          The Infinity
        </span>
        <span className="text-xl md:text-4xl font-bold text-[#0097b2] before:translate-z-[10rem] -mt-[2.5%]">
          Solutions
        </span>
      </div>
      <div className=" w-[25%] flex max-w-lg items-center justify-end">
        <div className="relative z-10 flex w-[10vw] cursor-pointer items-center overflow-hidden rounded-full border border-[#0097b255] p-[1.5px] shadow-[0_8px_48px_4px_rgba(0,151,178,0.2)]">
          <div className=" animate-rotate absolute inset-0 h-full w-full rounded-full  bg-[conic-gradient(#0097b2_20deg,transparent_120deg)]"></div>
          <div className="relative z-20 flex flex-row justify-center w-full items-center rounded-full bg-black hover:bg-[#121212] px-4 py-2">
            <p className="relative z-50 w-full block rounded-lg border border-black bg-black  text-center text-sm text-white shadow-2xl transition duration-200">
              Contact Us
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
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
  );
};

export default Navbar;