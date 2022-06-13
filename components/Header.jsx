import React, { useState, useEffect } from "react";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import Image from "next/image";
import Link from "next/link";
import linkedin from "../assets/linkedin.png";
import NavigateIconLink from "./NavigateIconLink";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const social_links = [
    {
      key: "twitter",
      url: twitter,
      link: "https://twitter.com/niazmorshed_",
    },
    {
      key: "github",
      url: github,
      link: "https://github.com/NiazMorshed2007",
    },
    {
      key: "linkedin",
      url: linkedin,
      link: "https://www.linkedin.com/in/niaz-morshed-567012223/",
    },
  ];
  const handleSticky = () => {
    window.scrollY >= 15 ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);
  return (
    <header
      className={`flex fixed transition-all w-full ${
        sticky ? "&apos py-5 bg-white/50 shadow-lg backdrop-blur-lg" : "py-8"
      } items-center justify-between  px-12 z-10`}
    >
      <Link href={"/"}>
        <div className="font-semibold text-xl w-9 h-9 cursor-pointer rounded-full bg-violet-500 shadow-lg"></div>
      </Link>
      <nav className="flex ml-20 items-center gap-14">
        <Link href={"/#about"}>About me</Link>
        <Link href={"/#experience"}>Experience</Link>
        <Link href={"/#showcase"}>Showcase</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      <div className="flex items-center gap-2">
        {social_links.map((link) => (
          <NavigateIconLink key={link.key} url={link.link} iconUrl={link.url} />
        ))}
      </div>
    </header>
  );
};

export default Header;
