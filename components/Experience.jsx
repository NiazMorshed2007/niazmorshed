import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const exps = [
    {
      name: "Uqidev",
      img: "/uqidev.png",
      role: "Front End Developer",
      type: "Full Time",
      des: "Working as a React Front End Developer. Developing dynamic and complex user interfaces. Have experience of working with E-commerce website. Connected with senior developers. Learned and researched new tech sacks. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisfacilis ab sing elit. Quis facilis ab similique totam fugit fugiat enim voluptatibus pla",
      lifetime: "Jun 2021 - current",
    },
    {
      name: "Woiqo",
      img: "/woiqo.png",
      role: "Front End Developer",
      type: "Full Time",
      des: "Worked as a Frontend Web Developer. Worked with React.js and developed simple dynamic/static web apps. Implemented many templates with React and HTML.",
      lifetime: "Jan 2020 - Apr 2021",
    },
    {
      name: "Maks Inc",
      img: "/assets/maks.png",
      role: "Front End Developer",
      type: "Contract",
      des: "First project-based job in my dev career. Developed dynamic and complex HR Management Software for Maks Inc. It helps them to manage their projects, employees, clients and more",
      lifetime: "Jul 2022 - Aug 2022",
    },
  ];
  return (
    <section id="experience" className="py-28 relative px-[7%]">
      <div className="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-5 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[200px]"></div>
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
