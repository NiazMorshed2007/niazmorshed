const Experience = () => {
  return (
    <section id="experience" className="py-28 px-20">
      <h1 className="title">Experience</h1>
      <div className="works-wrapper mt-7 flex items-center gap-9">
        <div className="uqidev w-1/2 p-7 rounded-lg border-gray-200 border shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img
                width={90}
                height={90}
                className={"rounded-full shadow-2xl"}
                src={"/uqidev.png"}
                alt=""
              />
              <div>
                <h1 className="text-xl uppercase font-semibold">Uqidev</h1>
                <p>Front End Developer</p>
              </div>
            </div>
            <div className="date text-xs text-gray-500">
              July 2021 - current
            </div>
          </div>
          <div className="mt-4 text-sm">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              aspernatur corrupti, ipsam ut quasi obcaecati voluptatum. Aut eos
              ab, obcaecati et perferendis sapiente corrupti possimus non
              voluptatem velit? Doloremque, maxime!
            </p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              voluptatum sapiente aut provident ex tenetur commodi, veniam,
              earum
            </p>
          </div>
        </div>
        <div className="woiqo w-1/2 p-7 rounded-lg border-gray-200 border shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img
                width={90}
                height={90}
                className={"rounded-full shadow-2xl"}
                src={"woiqo.png"}
                alt=""
              />
              <div>
                <h1 className="text-xl uppercase font-semibold">Uqidev</h1>
                <p>Front End Developer</p>
              </div>
            </div>
            <div className="date text-xs text-gray-500">
              April 2020 - June 2021
            </div>
          </div>
          <div className="mt-4 text-sm">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              aspernatur corrupti, ipsam ut quasi obcaecati voluptatum. Aut eos
              ab, obcaecati et perferendis sapiente corrupti possimus non
              voluptatem velit? Doloremque, maxime!
            </p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              voluptatum sapiente aut provident ex tenetur commodi, veniam,
              earum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
