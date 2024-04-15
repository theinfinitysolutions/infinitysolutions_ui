import React from "react";

let section = "About Us";
const AboutUs = () => {
  return (
    <div className="flex min-h-screen  flex-col items-center justify-between">
      <div className="absolute z-100 flex flex-col w-full top-0 h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0097b244] via-[#0097b211] to-[#0097b200] "></div>
      <div className="absolute z-0 inset-0 h-full to-0 w-full bg-transparent bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_60%,transparent_100%)]"></div>
      <div className="flex flex-col z-0 w-10/12 items-center">
        <div className="flex flex-col  items-center mt-[10vh] w-11/12 md:w-8/12 md:mt-[7.5vh]">
          <h1 className="overflow-hidden text-[2rem] md:text-[3rem] text3d text-center font-bold leading-[3rem] text-primaryColor">
            {section.split("").map((char, index) => (
              <span
                className={`animate-slideUpSlow inline-block  [animation-fill-mode:backwards]`}
                key={`${char}-${index}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className="mt-8 text-lg text-center">
            {
              "Welcome to The Infinity Solutions - where innovation meets excellence in IT consultancy services. We are a team of passionate individuals, dedicated to crafting bespoke solutions for your digital needs. We combine cutting-edge technology with user-friendly design to create seamless experiences that resonate with your audience. Whether it's developing intuitive websites, engaging mobile apps, or powerful software solutions, we prioritize usability and accessibility without compromising on functionality or performance."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
