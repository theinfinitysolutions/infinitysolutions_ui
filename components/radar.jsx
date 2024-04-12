"use client";
import React, { useState, useLayoutEffect } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Radar = ({ className }) => {
  const circles = new Array(8).fill(1);
  const [mobile, setMobile] = React.useState(false);

  useLayoutEffect(() => {
    let height = window.innerHeight;
    let width = window.innerWidth;

    if (height > width) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });
  return (
    <div
      className={twMerge(
        "relative flex h-20 w-20 items-center justify-center rounded-full  ",
        className
      )}
    >
      <div
        style={{
          transformOrigin: "right center",
        }}
        className="absolute right-1/2 top-1/2  z-40 flex h-[5px]
        overflow-hidden animate-radar-spin w-[400px] duration-[4000ms]  items-end justify-center bg-transparent"
      >
        {/* Radar line that rotates */}
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent  via-primaryColor to-transparent" />
      </div>
      {/* concentric circles */}
      {circles.map((circle, idx) => (
        <Circle
          style={{
            height: mobile ? `${(idx + 1) * 3}rem` : `${(idx + 1) * 6}rem`,
            width: mobile ? `${(idx + 1) * 3}rem` : `${(idx + 1) * 6}rem`,
            border: `2px solid rgba(71, 85, 105, ${1 - (idx + 1) * 0.1})`,
          }}
          key={`motion-${idx}`}
          idx={idx}
        />
      ))}
    </div>
  );
};

{
  /* Creating circles */
}
export const Circle = ({ className, children, idx, ...rest }) => {
  return (
    <motion.div
      {...rest}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: idx * 0.1,
        duration: 0.2,
      }}
      className={twMerge(
        "absolute inset-0 left-1/2 top-1/2 h-10 w-10  -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-neutral-200",
        className
      )}
    ></motion.div>
  );
};
