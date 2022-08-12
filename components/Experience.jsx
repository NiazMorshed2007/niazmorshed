import ExperienceCard from "./ExperienceCard";
import exps from "../static/experience.json";

const Experience = () => {
  return (
    <section id="experience" className="py-28 relative px-[7%]">
      {/* <div className="absolute bottom-44 left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-80 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[200px]"></div> */}
      <div className="absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-5 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[100px]"></div>

      <h1 className="title text-center">Experience</h1>
      <div className="works-wrapper mt-7 grid md:grid-cols-3 grid-cols-1 gap-4">
        {exps.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
