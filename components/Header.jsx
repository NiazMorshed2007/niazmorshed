import React, { useState, useEffect } from "react";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import Image from "next/image";
import Link from "next/link";

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
        sticky ? "&apos py-5 bg-white shadow-lg" : "py-8"
      } items-center justify-between px-12 z-10`}
    >
      <div className="font-semibold text-xl w-9 h-9 cursor-pointer rounded-full bg-violet-500 shadow-lg"></div>
      <nav className="flex items-center gap-14">
        <p>About me</p>
        <p>Showcase</p>
        <p>Skills</p>
        <p>Contact</p>
      </nav>
      <div className="flex items-center gap-2">
        {social_links.map((link) => (
          <Link key={link.key} href={link.url}>
            <div className="p-2 w-10 h-10 rounded-full border border-gray-100 shadow-xl flex items-center justify-center">
              <Image width={50} src={link.url} alt={"icon"} />
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
