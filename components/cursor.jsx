"use client";
import React, { useState, useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    window.addEventListener("mousemove", animateCircles);
    return () => {
      window.removeEventListener("mousemove", animateCircles);
    };
  }, []);

  function animateCircles(e) {
    const circle = document.querySelector(".circle");
    let x = e.clientX;
    let y = e.clientY;

    // circle.animate({
    //     left: x - 12 + "px",
    //     top: y - 12 + "px",

    // },{duration:3000,})

    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    requestAnimationFrame(animateCircles);
  }

  return (
    <>
      <div className="circle"></div>
    </>
  );
};

export default Cursor;
