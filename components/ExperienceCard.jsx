import React from "react";

const ExperienceCard = ({ name, img, role, type, lifetime }) => {
  return (
    <div className="uqidev w-4/12 p-3 py-7 rounded-xl border-gray-300/70 border">
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
      <div className="mt-4 text-[12.5px]  ">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          aspernatur corrupti, ipsam ut quasi obcaecati voluptatum. Aut eos ab,
          obcaecati et perferendis sapiente corrupti possimus non voluptatem
          velit? Doloremque, maxime!
        </p>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          voluptatum sapiente aut provident ex tenetur commodi, veniam, earum
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
