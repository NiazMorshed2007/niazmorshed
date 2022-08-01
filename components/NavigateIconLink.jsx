import Link from "next/link";
import React from "react";

const NavigateIconLink = (props) => {
  const { url, iconUrl } = props;
  return (
    <Link href={url}>
      <div className="p-2 w-10 h-10 cursor-pointer rounded-full border flex items-center justify-center">
        <img src={iconUrl} alt="" />
      </div>
    </Link>
  );
};

export default NavigateIconLink;
