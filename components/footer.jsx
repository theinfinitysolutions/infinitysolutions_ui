// components/Footer.jsx
"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

let footerItemsClass = "text-md lg:text-md hover:underline text-black";

const navbarItems = [
  { title: "Home", link: "/home" },
  { title: "About Us", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Consultant's Desk", link: "/consultant" },
  { title: "Blogs", link: "/blogs" },
  { title: "Contact Us", link: "/contactus" },
];

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-black w-screen text-white pb-4 bottom-0 z-[10]">
      <div></div>
      <div className="border-t border-[#0097b2]  pt-4 flex flex-col-reverse items-center  md:flex-row md:justify-between">
        <div className="w-3/12" />
        <p className="text-center text-sm text-white">
          &copy; {new Date().getFullYear()} The Infinity Solutions. All rights
          reserved.
        </p>
        <div className="flex flex-row text-sm justify-center w-full md:w-3/12 mb-4 md:mb-0 text-black">
          {/* <p className="text-[12px] text-white">Developed and Maintained By </p>
          <a
            href="https://theinfinitysolutions.net"
            className="underline ml-2 font-bold text-[12px]"
          >
            The Infinity Solutions
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
