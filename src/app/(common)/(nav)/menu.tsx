"use client";

import IconImg from "@/app/(home)/iconImg";
import { IconData } from "@/constant/constant";
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
          src="/image/window_pixel.webp"
          alt="menu icon"
          width={24}
          height={24}
        />
        <span>Start</span>
      </div>
      {openMenu && (
        <ul className="absolute bottom-[40px] flex bg-gray shadow-menu">
          <li className="writing-mode w-5 h-[200px] py-[10px] bg-[#7f8279] font-bold">
            Window 95
          </li>
          <li className="h-full">
            <ul>
              {Object.keys(IconData).map((data) => (
                <IconImg
                  key={data}
                  name={data}
                  url={`/image/${data}.webp`}
                  components={IconData[data].components}
                  menu={true}
                />
              ))}
            </ul>
          </li>
        </ul>
      )}
    </React.Fragment>
  );
}
