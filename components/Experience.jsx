import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const exps = [
    {
      name: "Uqidev",
      img: "/uqidev.png",
      role: "Front End Developer",
      type: "Full Time",
      lifetime: "Jun 2021 - current",
    },
    {
      name: "Woiqo",
      img: "/woiqo.png",
      role: "Front End Developer",
      type: "Full Time",
      lifetime: "Jan 2020 - Apr 2021",
    },
    {
      name: "Maks Inc",
      img: "/assets/maks.png",
      role: "Front End Developer",
      type: "Contract",
      lifetime: "Jul 2022 - Aug 2022",
    },
  ];
  return (
    <section id="experience" className="py-28 px-24">
      <h1 className="title">Experience</h1>
      <div className="works-wrapper mt-7 flex items-center gap-4">
        {exps.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
