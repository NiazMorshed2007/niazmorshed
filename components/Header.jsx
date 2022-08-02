import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const handleSticky = () => {
    window.scrollY >= 15 ? setSticky(true) : setSticky(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);
  return (
    <header
      className={`flex fixed pr-24 transition-all w-full ${
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
      <nav className="flex ml-20 items-center text-sm gap-1">
        <Link href={"/"}>Home</Link>
        <Link href={"/#experience"}>Experience</Link>
        <Link href={"/#showcase"}>Showcase</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
