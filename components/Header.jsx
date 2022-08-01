import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  // const social_links = [
  //   {
  //     key: "twitter",
  //     url: twitter,
  //     link: "https://twitter.com/niazmorshed_",
  //   },
  //   {
  //     key: "github",
  //     url: github,
  //     link: "https://github.com/NiazMorshed2007",
  //   },
  //   {
  //     key: "linkedin",
  //     url: linkedin,
  //     link: "https://www.linkedin.com/in/niaz-morshed-567012223/",
  //   },
  // ];
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
      } items-center justify-between  px-12 z-10`}
    >
      <Link href={"/"}>
        <img
          className="w-12 h-12 cursor-pointer rounded-xl border"
          src="/logo.png"
          alt=""
        />
        {/* <h1 className="text-2xl tracking-wider text-cyan-400 font-bold">
          Niaz Morshed
        </h1> */}
      </Link>
      <nav className="flex ml-20 items-center text-sm gap-1">
        <Link href={"/"}>Home</Link>
        <Link href={"/#experience"}>Experience</Link>
        <Link href={"/#showcase"}>Showcase</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      {/* <div className="flex items-center gap-2">
        {social_links.map((link) => (
          <NavigateIconLink key={link.key} url={link.link} iconUrl={link.url} />
        ))}
      </div> */}
    </header>
  );
};

export default Header;
