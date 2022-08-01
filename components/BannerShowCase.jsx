import React from "react";

const ShowCaseBanner = () => {
  return (
    <div className="banner-wrapper overflow-hidden relative">
      <div className="banner backdrop-blur-sm relative py-14 pt-40 bg-slate-100/50 px-24  w-full h-auto">
        <div className="w-1/2 pt-5">
          <h1 className="text-5xl font-semibold">Explore all my works</h1>
          <h2 className="mt-4 font-medium text-xl">
            Frontend Software Engineer,
          </h2>
          <button className="">Scroll Down</button>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseBanner;
