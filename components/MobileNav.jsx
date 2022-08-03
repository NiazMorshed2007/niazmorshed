import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MobileNavigation = (props) => {
  const { mobileNavOpened, setMobileNavOpened } = props;
  const links = [
    { title: "Home", rel: "" },
    { title: "Experience", rel: "#experience" },
    { title: "Showcase", rel: "#showcase" },
    { title: "Contact", rel: "contact" },
  ];
  return (
    <div
      className={`mask z-20 h-screen transition-all w-screen ${
        mobileNavOpened ? "opacity-100" : "opacity-0 invisible"
      } backdrop-blur bg-slate-200/80 fixed top-0 left-0`}
    >
      {mobileNavOpened && (
        <nav className="flex-col flex w-full h-full justify-center items-center gap-8">
          {links.map((link, i) => (
            <motion.p
              onClick={() => {
                setMobileNavOpened(false);
              }}
              key={link.rel}
              initial={{ opacity: 0, translateY: 70 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: i * 0.02 }}
              exit={{ opacity: 0, translateY: 70 }}
            >
              <Link href={"/" + link.rel}>{link.title}</Link>
            </motion.p>
          ))}
        </nav>
      )}
    </div>
  );
};

export default MobileNavigation;
