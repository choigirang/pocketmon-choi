"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <React.Fragment>
      <div
        className={`flex items-center gap-2 px-[5px] cursor-pointer ${openMenu ? "shadow-timer" : "shadow-menu"} transition-custom`}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <Image
          src="/image/window_pixel.svg"
          alt="menu icon"
          width={24}
          height={24}
        />
        <span>Start</span>
      </div>
      <ul className="absolute bottom-[40px] grid-col-menu bg-gray">
        <li>Window 95</li>
      </ul>
    </React.Fragment>
  );
}
