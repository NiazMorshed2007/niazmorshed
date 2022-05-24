import React from "react";
import triangle from "../assets/triangle.png";
import code from "../assets/code.png";

const Banner = () => {
  return (
    <div className="banner-wrapper overflow-hidden relative">
      <div className="absolute rotate-12 top-14 left-1/2">
        <img width={150} src={triangle.src} alt="" />
      </div>
      <div className="absolute rotate-12 bottom-14 right-32">
        <img width={250} src={code.src} alt="" />
      </div>
      <div className="absolute w-56 h-56 border-8 border-violet-800 rounded-full bottom-10 left-10"></div>
      <div className="banner justify-center backdrop-blur-sm relative flex items-center bg-slate-100/50 px-14 w-full h-screen">
        <div className="w-1/2 text-center pt-5">
          <p>Hello there, </p>
          <h1 className="text-7xl font-semibold">I'm Niaz Morshed</h1>
          <h2 className="mt-4 font-medium text-xl">
            Frontend Software Engineer, I create beautiful UI for modern user
            experience better to make web better.
          </h2>
          <button className="mt-7 p-3 px-6 rounded-3xl shadow-lg bg-violet-800 text-white">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
