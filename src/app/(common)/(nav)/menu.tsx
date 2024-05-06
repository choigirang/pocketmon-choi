"use client";

import IconImg from "@/app/(home)/iconImg";
import { IconData } from "@/constant/constant";
import Image from "next/image";
import React, { useState } from "react";
import Computer from "../(window)/(computer)/computer";

/** 2024/05/06 - 시작 메뉴, 프로그램 목록*/
export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={`flex items-center gap-2 px-[5px] cursor-pointer ${openMenu ? "shadow-timer" : "shadow-menu"} transition-custom`}
      onClick={() => setOpenMenu((prev) => !prev)}
    >
      {/* menu button */}
      <Image
        src="/image/window_pixel.webp"
        alt="menu icon"
        width={24}
        height={24}
      />
      <span>Start</span>
      {/* menu list */}
      {openMenu && (
        <ul className="absolute left-0 bottom-[40px] flex bg-gray shadow-menu">
          <li className="flex items-center writing-mode w-7 min-h-[200px] py-[10px] bg-[#7f8279] font-bold">
            Window 95
          </li>
          <li className="h-full">
            <ul className="flex flex-col">
              {Object.keys(IconData).map((data) => (
                <IconImg
                  key={data}
                  name={data}
                  components={IconData[data].components}
                  menu
                />
              ))}
              {/* 컴퓨터 안에 컴퓨터 호출 초기화 문제로 별도 추가 */}
              <IconImg
                key={"computer"}
                name={"computer"}
                components={Computer()}
                menu
              />
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
}
