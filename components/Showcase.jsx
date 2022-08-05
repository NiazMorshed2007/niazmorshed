import { useRouter } from "next/router";
import projects from "../static/projects.json";
import { motion } from "framer-motion";

const ShowCase = () => {
  return (
    <section
      id="showcase"
      className="py-28 px-[7%] flex flex-col items-center relative bg-gray-50/70"
    >
      <div className="absolute left-[8%] top-[40%] hidden rotate-12 rounded-3xl bg-sky-400/50 opacity-30 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[900px]"/>

      <h1 className="title"> Showcase</h1>
      <div className="projects-wrapper w-full grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={i}
            className="project cursor-pointer hover:shadow-md shadow-sky-300 transition-all bg-white/20 backdrop-blur-sm hover:border-slate-400/70 rounded-lg overflow-hidden border border-slate-300"
          >
            <div className="content p-3">
              <div className="py-1 pb-2 border-b border-slate-300">
                <h1 className="text-lg font-medium">- {project.name} -</h1>
              </div>
              <div className="mt-4">
                <img className="rounded border" src={project.photo} alt="" />
                <div className="mt-2">
                  <span className="text-sm border-b border-dashed border-slate-400 text-orange-800">
                    Short Description:
                  </span>
                  <p className="text-sm text-slate-900 mt-1">
                    {" " + project.des}
                  </p>
                  <p className="my-4 text-sm">
                    <span className=" text-blue-500">Status: </span>{" "}
                    <span>Featured</span>
                    <span className="ml-4 bg-black text-xs text-white p-2 px-3 rounded">
                      Github repo
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShowCase;
