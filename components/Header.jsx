import React, { useState, useEffect } from "react";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const social_links = [
    {
      key: "twitter",
      url: twitter.src,
      link: "https://twitter.com/niazmorshed_",
    },
    {
      key: "github",
      url: github.src,
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
      className={`fixed ${
        sticky ? "bg-white/70 py-5" : "py-7"
      } transition-all z-50 w-full px-7 backdrop-blur-sm flex items-center justify-between`}
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
          <a rel="noreffer" target={"_blank"} key={link.key} href={link.link}>
            <div className="p-2 w-10 h-10 rounded-full border border-gray-100 shadow-xl flex items-center justify-center">
              <img src={link.url} alt="" />
            </div>
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
