"use client";

import { useRecoilState } from "recoil";
import Menu from "./menu";
import { windowState } from "@/recoil/window/windowState";
import Image from "next/image";
import { useState } from "react";
import ContextMenu from "./contextMenu";
import useWindowAtom from "@/hooks/useWindowAtom";

/** 2024/05/06 - server/client recoil 분리를 위한  컴포넌트*/
export default function MenuWithWindow() {
  const { isWindow, handleMenuWindow } = useWindowAtom();
  const [contextMenu, setContextMenu] = useState(false);
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });

  /** 우클릭 시 메뉴 위치 */
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setContextMenu(true);
    setMenuPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="flex gap-2">
      <Menu />

      {/* 열린 프로그램 목록을 보여줄 리스트 */}
      <ul className="flex gap-2">
        {isWindow.map((list) => (
          <li
            key={list.name}
            className={`relative flex items-center gap-2 h-full ${list.open ? "shadow-inner bg-white" : "shadow-menu"} pl-2 pr-4 cursor-pointer`}
            onClick={() => handleMenuWindow(list.name)}
            onContextMenu={(e) => handleContextMenu(e)}
          >
            <Image
              width={24}
              height={24}
              src={`/image/icon/${list.name}.webp`}
              alt={`${list.name} img`}
            />
            <span>{list.name}</span>

            {/* 우클릭 메뉴 */}
            {contextMenu && (
              <ContextMenu
                pos={menuPos}
                setContextMenu={setContextMenu}
                list={list}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
