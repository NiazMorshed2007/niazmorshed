import projects from "../static/projects.json";
import {AiOutlineLink} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'

const ShowCase = () => {
    return (
        <section
            id="showcase"
            className="py-28 px-[7%] flex flex-col items-center relative bg-gray-50/70"
        >
            <div
                className="absolute left-[8%] top-[40%] hidden rotate-12 rounded-3xl bg-sky-400/50 opacity-30 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[900px]"/>

            <h1 className="title"> Showcase</h1>
            <div className="projects-wrapper w-full grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="project h-max hover:shadow-md shadow-sky-300 transition-all bg-white/20 backdrop-blur-sm hover:border-slate-400/70 rounded-lg overflow-hidden border border-slate-300"
                    >
                        <div className="content p-3">
                            <div className="py-1 pb-2 border-b border-slate-300">
                                <h1 className="text-lg font-medium">- {project.name} -</h1>
                            </div>
                            <div className="mt-4">
                                <img className="rounded border h-40 w-full object-cover" src={project.photo} alt=""/>
                                <div className="mt-3">
                  <span className="text-sm font-medium text-orange-800">
                    Short Description:
                  </span>
                                    <span className="text-sm text-slate-900 mt-1">
                    {" " + project.des}
                  </span>
                                    <div className={"flex items-center gap-4"}>
                                        <p className="my-4 text-sm border-r pr-4 border-slate-400">
                                            <span className="font-medium">Status: </span>{" "}
                                            <span className={"text-sky-600"}>{project.status}</span>
                                        </p>
                                        <a rel={"noreferrer"} className={`text-sm p-2 ${project.live === "" && "pointer-events-none opacity-40"} border-l rounded-full bg-black/95 text-white`}
                                           target={"_blank"} href={project.live}><AiOutlineLink/></a>
                                        <a rel={"noreferrer"} className={`text-sm p-1 ${project.git === "" && "pointer-events-none opacity-40"} rounded-full bg-black/95 text-white`}
                                           target={"_blank"} href={project.git}><BsGithub/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <a href="https://github.com/NiazMorshed2007?tab=repositories" target={"_blank"} rel={"noreferrer"}>
                <button className={"hover:shadow-2xl transition-all"}>View All Works on Github!</button>
                </a>
            </div>
        </section>
    );
};

export default ShowCase;
