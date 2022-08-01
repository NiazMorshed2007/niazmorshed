import { useRouter } from "next/router";
import projects from "../projects.json";
import { motion } from "framer-motion";

const ShowCase = () => {
  const router = useRouter();
  return (
    <section
      id="showcase"
      className="py-28 px-[7%] flex flex-col items-center bg-gray-50/70"
    >
      <h1 className="title"> Showcase</h1>
      <div className="projects-wrapper w-full grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={i}
            className="project cursor-pointer transition-all hover:border-slate-400 rounded-lg overflow-hidden border border-slate-300"
          >
            {/* <motion.img
              key="child"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layoutId={project.id}
              exit={{ scale: 1 }}
              src={project.photo}
              alt="photo"
            /> */}
            <div className="content p-3">
              <div className="flex items-center justify-between py-1 pb-2 border-b border-dashed">
                <h1 className="text-lg">{project.name}</h1>
                <div className="live-preview text-xs">Preview</div>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                facilis ab sing elit. Quis facilis ab similique totam fugit
                fugiat enim voluptatibus placeat{" "}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShowCase;
