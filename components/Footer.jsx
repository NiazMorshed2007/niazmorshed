import Link from "next/link";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { VscMail } from "react-icons/vsc";
import NavigateIconLink from "./NavigateIconLink";

const Footer = () => {
  const social_links = [
    {
      key: "twitter",
      url: "/assets/twitter.png",
      link: "https://twitter.com/niazmorshed_",
    },
    {
      key: "github",
      url: "/assets/github.png",
      link: "https://github.com/NiazMorshed2007",
    },
    {
      key: "linkedin",
      url: "/assets/linkedin.png",
      link: "https://www.linkedin.com/in/niaz-morshed-567012223/",
    },
  ];
  return (
    <footer className="border-t p-4 flex md:flex-row flex-col items-center justify-between px-[4%]">
      <div className="flex items-center md:flex-row flex-col gap-3 mb-3 md:mb-0 md:gap-6 text-xs">
        <Link href={"/"}>
          <img
            className="w-12 h-12 cursor-pointer rounded-xl border"
            src="/logo.png"
            alt=""
          />
        </Link>
        <p className="flex items-center gap-1">
          <BsTelephone />
          +880 1828172830
        </p>
        <p className="flex items-center gap-1">
          <VscMail />
          niazmorshed2007@gmail.com
        </p>
      </div>
      <div className="flex items-center gap-2">
        {social_links.map((link) => (
          <NavigateIconLink key={link.key} url={link.link} iconUrl={link.url} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
