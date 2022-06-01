import React from "react";
import uqidev from "../assets/uqidev.png";
import woiqo from "../assets/woiqo.png";

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-20">
      <h1 className="title">Experience</h1>
      <p className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed obcaecati
        reprehenderit repudiandae, dolorem minima quisquam ab deserunt! Quis
        atque dicta nostrum eaque, excepturi voluptates eveniet totam repellat
        at fugiat cumque.
      </p>
      <div className="works-wrapper mt-7 flex items-center gap-9">
        <div className="uqidev w-1/2 p-7 rounded-lg border-gray-200 border shadow-lg">
          <div className="flex items-center gap-5">
            <img
              width={90}
              height={90}
              className={"rounded-full shadow-2xl"}
              src={uqidev.src}
              alt=""
            />
            <div>
              <h1 className="text-xl uppercase font-semibold">Uqidev</h1>
              <p>Front End Developer</p>
            </div>
          </div>
        </div>
        <div className="woiqo w-1/2 p-7 rounded-lg border-gray-200 border shadow-lg">
          <div className="flex items-center gap-5">
            <img
              width={90}
              height={90}
              className={"rounded-full object-contain shadow-2xl"}
              src={woiqo.src}
              alt=""
            />
            <div>
              <h1 className="text-xl uppercase font-semibold">woiqo</h1>
              <p>Front End Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
