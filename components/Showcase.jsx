import { useRouter } from "next/router";
import React from "react";
import projects from "../projects.json";
import github from "../assets/github.png";
import Image from "next/image";
import NavigateIconLink from "./NavigateIconLink";

const ShowCase = () => {
  const router = useRouter();
  return (
    <section id="showcase" className="py-28 px-20 bg-gray-50/30">
      <h1 className="text-3xl border-b border-dashed">
        {" "}
        <span className="text-5xl text-indigo-500">S</span>howcase
      </h1>
      <div className="projects-wrapper border-b border-dashed flex items-center justify-around flex-wrap gap-10 py-10">
        {projects.map((project, i) => (
          <div
            style={{ width: "340px" }}
            key={i}
            className="project cursor-pointer transition-all hover:scale-105 hover:shad rounded-lg overflow-hidden shadow-xl"
          >
            <img src={project.photo} alt="photo" />
            <div className="content p-3">
              <div className="flex items-center justify-between py-1 pb-2 border-b border-dashed">
                <h1 className="text-lg">{project.name}</h1>
                <div className="live-preview text-xs">Preview</div>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                facilis ab similique totam fugit fugiat enim voluptatibus
                placeat{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          router.push("/showcase-more");
        }}
      >
        Show more
      </button>
    </section>
  );
};

export default ShowCase;
