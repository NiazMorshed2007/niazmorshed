import React from "react";

const ExperienceCard = ({ name, img, des, role, type, lifetime }) => {
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
            <div className="flex items-center gap-3">
              <h1 className="text-sm font-semibold">{name}</h1>
              <span className="text-[10px]">{"(" + type + ")"}</span>
              <span className="text-[10px]">{"[" + lifetime + "]"}</span>
            </div>
            <p className=" text-xs">{role}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-[12.5px]  ">{des}</div>
    </div>
  );
};

export default ExperienceCard;
