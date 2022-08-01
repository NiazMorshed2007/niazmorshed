import { useRouter } from "next/router";
import projects from "../projects.json";
import { motion } from "framer-motion";

const ShowCase = () => {
  const router = useRouter();
  return (
    <section id="showcase" className="py-28 px-24 bg-gray-50/80">
      <h1 className="title"> Showcase</h1>
      <div className="projects-wrapper w-full grid grid-rows-4 grid-cols-3 gap-4 py-10">
        {projects.map((project, i) => (
          <motion.div
            onClick={() => {
              router.push(`/p/${project.id}`);
            }}
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
                facilis ab similique totam fugit fugiat enim voluptatibus
                placeat{" "}
              </p>
            </div>
          </motion.div>
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
