// components/Footer.jsx
"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

let footerItemsClass =
  "text-md lg:text-md hover:underline text-primaryColor/80 cursor-pointer";

const navbarItems = [
  { title: "Home", link: "/home" },
  { title: "Services", link: "/services" },
  { title: "Projects", link: "/projects" },
  { title: "About Us", link: "/about" },
];

const websitePolicies = [
  { title: "Terms & Conditions", link: "/" },
  { title: "Refund Policy", link: "/" },
  { title: "Terms of Use", link: "/" },
  { title: "Security Policy", link: "/" },
  { title: "Website Policies", link: "/" },
];

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="w-screen relative bg-black bg-gradient-to-r from-[#04335733] to-[#0097b244] pb-4 flex flex-col items-center bottom-0 z-[10]">
      <div className="flex flex-col md:flex-row justify-between w-full pl-[8vw] pr-[4vw] py-[5vh] ">
        <div className="flex flex-col justify-center  items-start w-[40vw]">
          <span className="text-[3rem] md:text-[6rem] text-start leading-[3rem] md:leading-[6rem] font-bold text-[#0097b2]">
            The
          </span>
          <span className="text-[3rem] md:text-[6rem] text-start leading-[3rem] md:leading-[6rem] font-bold text-[#0097b2]">
            Infinity
          </span>
          <span className="text-[3rem] md:text-[6rem] text-start leading-[3rem] md:leading-[6rem] font-bold text-[#0097b2]">
            Solutions
          </span>
        </div>
        <div className="w-full lg:w-[50%] grid gap-y-8 grid-cols-2 md:flex md:flex-row justify-between mt-8 lg:mt-[5vh] mx-2">
          <div className=" md:w-6/12 flex flex-col items-left">
            <h3 className="text-xl font-bold text-primaryColor">Quick Links</h3>
            <ul className="mt-2">
              {navbarItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      onClick={() => router.push(item.link)}
                      className={footerItemsClass}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" md:w-6/12 flex flex-col items-left ">
            <h3 className="text-xl font-bold text-primaryColor">
              Website Policies
            </h3>
            <ul className="mt-2">
              {websitePolicies.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      onClick={() => router.push(item.link)}
                      className={footerItemsClass}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" md:w-5/12 flex flex-col items-left">
            <h3 className="text-lg font-bold text-primaryColor">Follow Us</h3>
            <div className="flex flex-col mt-2">
              <div className="flex flex-row justify-start items-center mb-1">
                <FaLinkedin color="#0097b2" className="text-xl" />
                <p className="text-primaryColor text-md mx-2">Linkedin</p>
              </div>
              <div className="flex flex-row justify-start items-center mb-1">
                <FaXTwitter color="#0097b2" className="text-xl" />
                <p className="text-primaryColor text-md mx-2">
                  {" X (Twitter)"}
                </p>
              </div>
              <div className="flex flex-row justify-start items-center mb-1">
                <FaGithub color="#0097b2" className="text-xl" />
                <p className="text-primaryColor text-md mx-2">{" Github"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#0097b2] w-full  pt-4 flex flex-col-reverse items-center  md:flex-row md:justify-between">
        <div className="w-3/12" />
        <p className="text-center text-sm text-primaryText">
          &copy; {new Date().getFullYear()} The Infinity Solutions. All rights
          reserved.
        </p>
        <div className="flex flex-row text-sm justify-center w-full md:w-3/12 mb-4 md:mb-0 text-black">
          {/* <p className="text-[12px] text-primaryText">Developed and Maintained By </p>
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
