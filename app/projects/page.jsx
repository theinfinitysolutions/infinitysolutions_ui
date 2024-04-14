"use client";
import React, { useState, useEffect, useRef } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { HiArrowLongRight } from "react-icons/hi2";
import { animate, motion } from "framer-motion";
import { projects } from "@/utils/consts";
import Image from "next/image";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {}, [currentProject]);

  return (
    <div className="flex min-h-screen  flex-col items-center justify-between">
      <div className="absolute z-100 flex flex-col w-full top-0 h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0097b244] via-[#0097b211] to-[#0097b200] "></div>
      <div className="absolute z-0 inset-0 h-full to-0 w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_60%,transparent_100%)]"></div>
      <div className="flex flex-col z-0 w-10/12">
        <div className="flex flex-row justify-end mt-[10vh]">
          <a
            onClick={() => {
              setCurrentProject((currentProject + 1) % projects.length);
            }}
            className="flex flex-row items-center cursor-pointer"
          >
            <p className="text-primaryText text-lg">Next Project :</p>
            <p className="text-primaryColor ml-4 mr-[5vw] text-lg">
              {" "}
              {projects[currentProject % projects.length]?.title}
            </p>
            <motion.div
              initial={{ x: -40 }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              <HiArrowLongRight className="text-primaryText text-[2rem]" />
            </motion.div>
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start w-full mt-[2.5%]">
          <div className="flex flex-col justify-center w-full md:w-4/12 mt-4">
            <p className="text-[2rem] text-primaryColor">
              {projects[currentProject].title}
            </p>
            <p className="text-xl mt-4 text-primaryText">
              {projects[currentProject].description}
            </p>
            <div className="flex flex-row mt-[10%] justify-between">
              <div className="flex flex-col justify-center items-start">
                <p className="text-sm text-primaryColor">TYPE:</p>
                <p className="text-xl text-primaryText mt-2">
                  {projects[currentProject].type}
                </p>
              </div>
              <div className="flex flex-col justify-center items-start">
                <p className="text-sm text-primaryColor">INDUSTRY:</p>
                <p className="text-xl text-primaryText mt-2">
                  {projects[currentProject].industry}
                </p>
              </div>
              <div className="flex flex-col justify-center items-start">
                <p className="text-sm text-primaryColor">LOCATION:</p>
                <p className="text-xl text-primaryText mt-2">
                  {projects[currentProject].location}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col overflow-x-scroll">
              <p className="text-primaryColor mt-4">TECH STACK</p>
              <div className="flex flex-row overflow-scroll mt-2">
                {projects[currentProject].techStack.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col px-4 py-4 items-center border-[1px] rounded-xl mr-2 border-[#666666]"
                    >
                      <div className="h-[7.5vh] w-[7.5vh] relative">
                        <Image src={item.image} layout="fill" />
                      </div>
                      <p className="text-[#666666] mt-2 text-md">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-row mt-8">
              <button
                onClick={() => {
                  window.open(projects[currentProject].link);
                }}
                className="text-primaryText bg-primaryColor text-md px-8 py-2 rounded-lg"
              >
                Visit
              </button>
            </div>
          </div>
          <div className="flex relative w-full md:w-7/12 h-[50vh]">
            <Image
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl border-[1px] p-2 border-primaryColor"
            />
          </div>
        </div>
        <RevealOnScroll
          threshold={0.5}
          addedClasses={" animate-slideUp mt-[15vh] px-[10vw] "}
        >
          <div className="circle2 left-1/2 top-1/3 -z-10"></div>
          <div className="flex flex-col items-center text-center my-[10vh] md:px-[10vw]">
            <p className="text-3xl text-primaryText">Testimonial</p>

            <p className="text-xl text-primaryText my-[5vh]">
              {projects[currentProject % projects.length]?.testimonial.message}
            </p>
            <p className="text-lg text-primaryText">
              {projects[currentProject % projects.length]?.testimonial.name}
            </p>
            <p className="text-md text-primaryColor mt-2">
              {
                projects[currentProject % projects.length]?.testimonial
                  .designation
              }
            </p>
          </div>
        </RevealOnScroll>
        <div className="flex flex-col justify-center items-center my-[10vh]">
          <p className="text-2xl">
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

export default Projects;
