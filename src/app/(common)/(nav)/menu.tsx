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
          src="/image/window_pixel.webp"
          alt="menu icon"
          width={24}
          height={24}
        />
        <span>Start</span>
      </div>
      {openMenu && (
        <ul className="absolute bottom-[40px] flex bg-gra shadow-menu">
          <li className="writing-mode py-[10px] bg-[#7f8279] font-bold">
            Window 95
          </li>
          <li className="h-full">
            <ul>
              <li>
                <Image
                  src="/image/My-Computer.png"
                  alt="computer img"
                  width={32}
                  height={32}
                ></Image>
              </li>
            </ul>
          </li>
        </ul>
      )}
    </React.Fragment>
  );
}
