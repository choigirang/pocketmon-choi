"use client";

import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { windowState } from "@/recoil/window/atom";

export interface IconImgProps {
  name: string;
  components: React.ReactNode;
  menu?: boolean;
  folder?: boolean;
}

/* 2024/05/06 - 폴더, 메뉴에 따른 아이콘 목록 */
export default function IconImg(props: IconImgProps) {
  const { name, components, menu, folder } = props;

  const [isWindow, setIsWindow] = useRecoilState(windowState);

  // open window check
  const handleClick = () => {
    if (!isWindow.some((item) => item.name === name)) {
      setIsWindow((prev) => [...prev, { name, components, open: true }]);
    } else
      setIsWindow((prev) =>
        prev.map((item) =>
          item.name === name ? { ...item, open: true } : item
        )
      );
  };

  // menu, folder에 따른 스타일 지정
  const menuStyle = () => {
    if (menu)
      return "flex-row border-b-2 border-[#7f8279] border-solid px-2 pr-4 py-1";
    else
      return "h-full flex-col justify-center items-center py-2 hover:outline-1 hover:outline-white hover:outline-dashed";
  };

  // menu, folder에 따른 img size
  const handleImgSize = () => {
    if (menu) return 24;
    if (folder) return 30;
    else return 40;
  };

  return (
    <li
      onClick={handleClick}
      className={`flex items-center hover:bg-[#1F55BB] cursor-pointer ${menuStyle()}`}
    >
      <Image
        width={handleImgSize()}
        height={handleImgSize()}
        src={`/image/${name}.webp`}
        alt={`${name} img`}
      />
      <span className="text-stone-800">{name}</span>
    </li>
  );
}
