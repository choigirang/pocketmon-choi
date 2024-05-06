"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import Menu from "./menu";
import { windowState } from "@/recoil/window/atom";
import Image from "next/image";

/** 2024/05/06 - server/client recoil 분리를 위한  컴포넌트*/
export default function MenuWithWindow() {
  const [isWindow, setIsWindow] = useRecoilState(windowState);

  const handleOpenWindow = (list: string) => {
    setIsWindow((prev) =>
      prev.map((item) =>
        item.name === list ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <div className="flex gap-2">
      <Menu />

      {/* 열린 프로그램 목록을 보여줄 리스트 */}
      <ul className="flex">
        {isWindow.map((list) => (
          <li
            key={list.name}
            className={`flex items-center gap-2 h-full ${list.open ? "shadow-inner" : "shadow-menu"} px-2 cursor-pointer`}
            onClick={() => handleOpenWindow(list.name)}
          >
            <Image
              width={24}
              height={24}
              src={`/image/${list.name}.webp`}
              alt={`${list.name} img`}
            />
            <span>{list.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
