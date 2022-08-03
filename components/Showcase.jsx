import { useRouter } from "next/router";
import projects from "../projects.json";
import { motion } from "framer-motion";

const ShowCase = () => {
  return (
    <section
      id="showcase"
      className="py-28 px-[7%] flex flex-col items-center relative bg-gray-50/70"
    >
      <div className="absolute left-[8%] top-[40%] hidden rotate-12 rounded-3xl bg-sky-400/50 opacity-30 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[900px]"></div>

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
              <div className="flex items-center justify-between py-1 pb-2 border-b border-slate-300">
                <h1 className="text-lg">{project.name}</h1>
                <div className="live-preview text-xs">Preview</div>
              </div>
              <p className="text-sm text-slate-900 mt-2">{project.des}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShowCase;
