"use client";

import React from "react";
import projects from "@/data/projects.json";
import Link from "next/link";

const ProjectsSection = () => {
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll(".card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  return (
    <section id="projects" className="py-20 pt-28 px-[5%]">
      <h1 className="md:text-4xl text-2xl font-semibold capitalize mb-3">
        A Showcase of My Diverse Work
      </h1>
      <p className="font-light text-slate-400 text-sm md:text-base">
        Featuring some of my best work to date from Collaborative Teams <br />{" "}
        to Independent Projects and Open Source Contributions.
      </p>
      <div
        id="cards"
        onMouseMove={handleMouseMove}
        className="projects flex flex-wrap justify-center gap-3 py-28"
      >
        {projects.map((project, index) => (
          <Link key={index} href={project.link} target="_blank">
            <div
              key={index}
              className="project-card card cursor-pointer border-gray-700 border border-transparent w-full sm:w-[360px] h-max p-4 rounded-xl pb-7 flex flex-col gap-6 bg-primary/5"
            >
              <div className="project-image h-[220px]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="w-full px-1 h-full flex flex-col gap-3 rounded-md">
                <h1 className="text-xl font-semibold text-white">
                  {project.title}
                </h1>
                <p className="text-slate-400 text-base font-light">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
