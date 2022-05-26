import React from "react";
import avatar from "../assets/profile-pic1.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className=" py-28 px-14 flex items-center gap-10">
      <div>
        <div className="avatar-wrapper w-64 h-64 rounded-full overflow-hidden shadow-2xl">
          <Image className="w-100 h-100" src={avatar} alt="avatar" />
        </div>
      </div>
      <div>
        <h1 className="text-3xl border-b border-dashed">About me</h1>
        <div className="w-9/12">
          <p className="mt-5  text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            illum pariatur commodi nam voluptatibus laboriosam suscipit ab
            molestias. Quidem incidunt at fugiat dolor officia odit id illum
            repellendus illo voluptates! ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus minima ut quasi iure rem omnis labore
            ex voluptate blanditiis expedita neque autem obcaec
          </p>
          <p className="mt-3 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            minima ut{" "}
            <span className="underline underline-offset-2 decoration-indigo-700">
              {" "}
              quasi iure rem omnis labore ex
            </span>{" "}
            voluptate blanditiis expedita neque autem obcaecati ducimus ratione
            impedit, aspernatur suscipit voluptatum natus!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
