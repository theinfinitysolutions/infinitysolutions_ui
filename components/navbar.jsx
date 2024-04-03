"use client";
import React from "react";
import { useRouter } from "next/navigation";

const navbarItems = [
  { title: "Products", link: "#products" },
  { title: "Services", link: "#services" },
  { title: "About Us", link: "#aboutus" },
];

let navbarItemsClass =
  "relative text-white text-[1rem] block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-transparent h-[90px] flex flex-row w-full fixed top-0 px-[5%] justify-between items-center z-10">
      <p className="text-xl md:text-3xl font-bold text-white">
        The Infinity Solutions
      </p>
      <div className="hidden md:flex flex-row justify-between w-[25%] items-center">
        {/* <div className="w-8/12 flex flex-row justify-between items-center"> */}
        {navbarItems.map((item, index) => {
          return (
            <a
              key={index}
              onClick={() => {
                //   window.scrollTo(item.link)
              }}
              className={navbarItemsClass}
            >
              {item.title}
            </a>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
