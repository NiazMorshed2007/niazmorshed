import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { useRouter } from "next/router";
import projects from "../../projects.json";
import { motion } from "framer-motion";

const Project = () => {
  const [project, setProject] = useState({});
  const {
    query: { id },
  } = useRouter();
  useEffect(() => {
    let pp = projects.find((s) => {
      return s.id === id;
    });
    setProject(pp);
    console.log(pp);
  }, [id]);
  return (
    <Layout>
      <div className="wrapper overflow-hidden w-screen h-screen p-28 pr-14">
        <div className="main flex w-full justify-between h-full items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="content relative w-1/2 pr-10"
          >
            <h1 className={"text-3xl"}>{project && project.name}</h1>
            <div className="text-[13px] flex flex-col gap-2 mt-4">
              {/* {project.description} */}
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                quisquam nam, a deleniti repellendus cum inventore assumenda
                illum non dolorum fugit iusto nobis, iure earum maxime aliquid
                veniam offic
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque facere quidem esse at non dolorum fugit iusto nobis,
                iure earum maxime aliquid veniam officiis voluptatum officia,
                ullam ipsam repudiandae omnis.it amet consectetur adipisicing
                elit. Doloremquime aliquid veniam officiis voluptatum officia,
                ullam ipsam repudiandae omnis
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremquime aliquid veniam officiis voluptatum officia, ullam
                ipsam repudiandae omnis.
              </p>
            </div>
          </motion.div>
          <iframe
            height="380"
            className="w-1/2 rounded-lg"
            src="https://www.youtube.com/embed/Qn8k0YsutsI"
            title="Meet Quire:  Boost Your Team Productivity"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* <motion.img
            layoutId={id}
            className="w-1/2 rounded-lg"
            src={project && project.photo}
            alt=""
          /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Project;
