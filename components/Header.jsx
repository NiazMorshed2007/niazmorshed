import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = (props) => {
  const { setMobileNavOpened, mobileNavOpened } = props;
  const [sticky, setSticky] = useState(false);
  const handleSticky = () => {
    window.scrollY >= 15 ? setSticky(true) : setSticky(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);
  return (
    <header
      className={`flex z-50 fixed md:pr-24 transition-all w-full ${
        sticky ? "&apos py-3 bg-white/80 shadow-lg backdrop-blur-lg" : "py-8"
      } items-center justify-between  px-[3.5%] z-10`}
    >
      <Link href={"/"}>
        <img
          className="w-12 h-12 cursor-pointer rounded-xl border"
          src="/logo.png"
          alt=""
        />
      </Link>
      <div
        onClick={() => setMobileNavOpened(!mobileNavOpened)}
        className="burger block md:hidden"
      >
        <motion.div
          animate={{
            rotate: mobileNavOpened ? -47 : 0,
            translateX: mobileNavOpened ? -2 : 0,
            translateY: mobileNavOpened ? 6 : 0,
          }}
          className="line w-6 m-1 h-[1px] bg-black"
        ></motion.div>
        <div
          className={`line ${
            mobileNavOpened && "hidden"
          } w-6 m-1 h-[1px] bg-black`}
        ></div>
        <motion.div
          animate={{
            rotate: mobileNavOpened ? 47 : 0,
            translateX: mobileNavOpened ? -2 : 0,
          }}
          className="line w-6 m-1 h-[1px] bg-black"
        ></motion.div>
      </div>
      <nav className="md:flex hidden ml-20 items-center text-sm gap-1">
        <Link href={"/"}>Home</Link>
        <Link href={"/#experience"}>Experience</Link>
        <Link href={"/#showcase"}>Showcase</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
