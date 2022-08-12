import React from "react";
import AnimatedLetters from "./AnimationLetters";

const Banner = () => {
  return (
    <div className="banner-wrapper overflow-hidden relative">
      <div className="absolute animate-pulse right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"/>
      <div className="absolute animate-pulse left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"/>
      <div className="absolute animate-pulse bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"/>
      <div
        style={{
          backgroundImage: "url(/assets/pattern.svg)",
        }}
        className="banner justify-between backdrop-blur-sm relative flex items-center bg-slate-100/50 px-5 md:px-24 w-full h-screen"
      >
        <div className="md:w-1/2 w-full pt-5">
          <h1 className="md:text-6xl text-4xl font-base mb-2">
            <AnimatedLetters title={"Niaz Morshed"} />
          </h1>
          <h2 className="md:text-lg text-sm">
            Front End Developer based on{" "}
            <span className=" text-cyan-600 underline underline-offset-4 decoration-cyan-500">
              React.js
            </span>
          </h2>
          <p className="mt-4 font-base leading-5 text-[11.5px] md:text-[12.5px]">
            I build the User Interfaces for the modern web. I have been working
            since 2020 as a front-end developer with a variety of skills. Over
            time, I've worked with 2 different companies as a remote front-end
            React developer and done some interesting projects.
          </p>
          <a target={"_blank"} href="/Niaz Morshed's Resume.pdf">
            <button>Preview Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
