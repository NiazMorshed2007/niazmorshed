import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavigateIconLink = (props) => {
  const { url, iconUrl } = props;
  return (
    <Link href={url}>
      <div className="p-2 w-10 h-10 cursor-pointer rounded-full border border-gray-100 shadow-xl flex items-center justify-center">
        <Image width={50} src={iconUrl} alt={"icon"} />
      </div>
    </Link>
  );
};

export default NavigateIconLink;
