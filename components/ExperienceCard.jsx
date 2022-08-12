import React from "react";

const ExperienceCard = ({ title, img, reps, role, type, duration }) => {
  return (
    <div className="uqidev p-3 py-7 rounded-xl border-gray-300/70 border">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className={
              "rounded-full w-[50px] h-[50px] object-contain border shadow-2xl"
            }
            src={img}
            alt=""
          />
          <div>
            <div className="flex md:flex-row flex-col md:items-center gap-1 md:gap-3">
              <h1 className="text-sm font-semibold">{title}</h1>
              <div className="flex md:mb-0 mb-1 items-center gap-3">
                <span className="text-[10px]">{"(" + type + ")"}</span>
                <span className="text-[10px]">{"[" + duration + "]"}</span>
              </div>
            </div>
            <p className=" text-xs">{role}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-[12.5px]">
        {reps.map((rep, i) => (
            <li key={i}>{rep}</li>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
