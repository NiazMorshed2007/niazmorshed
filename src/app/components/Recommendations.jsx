"use client";
import React from "react";
import recommendations from "@/data/recommendations.json";
import Link from "next/link";

const RecommendationsSection = () => {
  return (
    <section id="recommendations" className="py-8 px-[5%]">
      <h1 className="text-4xl font-semibold capitalize mb-3 text-center">
        Recommendations
      </h1>
      <p className="text-center text-base font-light text-slate-400">
        Some Senior developers and engineers whom I worked with <br />{" "}
        recommended me for my passion of programming 💖
      </p>
      <div className="flex flex-col items-center">
        <div className="recommendations flex items-center flex-wrap justify-center gap-6 py-28 pb-12">
          {recommendations.map((recommendation, index) => (
            <RecommendationCard key={index} {...recommendation} />
          ))}
        </div>
        {/* <Link href={"/recommend"}>
          <button className="p-2 md:px-6 md:text-sm text-xs px-3 mt-5 rounded-full border border-primary/50">
            Recommend me 🤩
          </button>
        </Link> */}
      </div>
    </section>
  );
};

const RecommendationCard = ({
  name,
  description,
  recommendation,
  avatar,
  link,
}) => {
  return (
    <div className="pt-12 items-center hover:border-slate-900 border border-transparent lg:w-[40%] sm:w-full w-[400px] h-max p-4 rounded-xl pb-7 flex flex-col gap-6 bg-primary/5">
      <Link href={link} target="_blank" className="cursor-pointer">
        <div className="flex flex-col items-center gap-4">
          <img className="w-[80px] h-[80px] rounded-full" src={avatar} alt="" />
          <div className="text-center">
            <h1 className="text-xl font-semibold">{name}</h1>
            <p className="text-sm text-slate-400">{description}</p>
          </div>
        </div>
      </Link>
      <p className="text-center text-sm text-slate-300">{recommendation}</p>
    </div>
  );
};

export default RecommendationsSection;
