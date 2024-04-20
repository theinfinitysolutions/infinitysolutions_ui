// components/Footer.jsx
"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

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
      <div className="flex flex-col md:flex-row justify-between w-full pl-[8vw] pr-[4vw] py-[5vh]">
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
        <div className="flex flex-col w-full lg:w-[50%] mt-8 lg:mt-[2.5vh] md:mx-2">
          <div className="w-full  grid gap-y-8 grid-cols-2 md:flex md:flex-row justify-between ">
            <div className=" md:w-6/12 flex flex-col items-left">
              <h3 className="text-xl font-bold text-primaryColor">
                Quick Links
              </h3>
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
            <div className="w-full md:w-5/12 flex flex-col items-left">
              <h3 className="text-xl font-bold text-primaryColor">Follow us</h3>
              <div className="justify-start gap-x-2 flex flex-row mt-2">
                <FaLinkedin color="#0097b2" className="text-xl" />
                <FaXTwitter color="#0097b2" className="text-xl" />
                <FaGithub color="#0097b2" className="text-xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-full flex flex-col md:flex-col justify-between bg-primaryColor/25 mt-8 rounded-md px-4 py-4">
              <div className="flex flex-col md:flex-row w-full">
                <a
                  onClick={() => {
                    window.open("tel:+918233842323", "_blank");
                  }}
                  className="flex flex-row items-center cursor-pointer"
                >
                  <div className="h-6 w-6 md:h-8 md:w-8 rounded-md flex justify-center items-center border-[1px] border-primaryColor">
                    <FaPhoneAlt
                      color="#0097b2"
                      className="text-sm md:text-xl"
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-sm md:text-md text-primaryColor">
                      {"+91-8233842323 "}
                    </p>
                  </div>
                </a>
                <a
                  onClick={() => {
                    window.open(
                      "mailto:info@theinfinitysolutions.net",
                      "_blank"
                    );
                  }}
                  className="flex flex-row items-center mt-4 md:mt-0 md:ml-8 cursor-pointer"
                >
                  <div className="h-6 w-6 md:h-8 md:w-8 rounded-md flex justify-center items-center border-[1px] border-primaryColor">
                    <MdOutlineMailOutline
                      color="#0097b2"
                      className="text-sm md:text-xl"
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-sm md:text-md text-primaryColor">
                      {"info@theinfinitysolutions.net"}
                    </p>
                  </div>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start w-full mt-4 ">
                <div className="h-6 w-6 md:h-8 md:w-8 rounded-md flex justify-center items-center border-[1px] border-primaryColor">
                  <IoLocation color="#0097b2" className=" text-sm md:text-xl" />
                </div>

                <p className=" w-11/12 text-sm md:text-md text-primaryColor ml-2">
                  Plot No. 23, Kailashpuri, New Sanganer Road, Jaipur,
                  Rajasthan, 302019
                </p>
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
