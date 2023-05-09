import React from 'react'
import projects from "@/data/projects.json"

const ProjectsSection = () => {
    return (
        <section className='py-20 pt-28 px-[5%]'>
            <h1 className='text-4xl font-semibold capitalize mb-3'>A Showcase of My Diverse Work</h1>
            <p className='font-light text-slate-400 text-base'>Featuring some of my best work to date from Collaborative Teams <br /> to Independent Projects and Open Source Contributions.</p>
            <div className="projects flex flex-wrap justify-center gap-6 py-28">
                {projects.map((project, index) => (
                    <div key={index} className="project-card cursor-pointer hover:border-slate-900 border border-transparent w-[360px] h-max p-4 rounded-xl pb-7 flex flex-col gap-6 bg-primary/5">
                        <div className="project-image h-[220px]">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="w-full px-1 h-full flex flex-col gap-3 rounded-md">
                            <h1 className="text-xl font-semibold text-white">{project.title}</h1>
                            <p className="text-slate-400 text-base font-light">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection