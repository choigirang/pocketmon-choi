"use client";

import useMakeFiles from "@/hooks/useContextMenu";
import Folder from "./folder";
import { AddIcon } from "@/recoil/icon/iconList";
import { useState } from "react";

const options: { [key: string]: AddIcon } = {
  folder: { name: "folder", components: Folder(), id: 0 },
};

export default function MakeFiles({ children }: { children: React.ReactNode }) {
  const [num, setNum] = useState(0);
  const { pos, showMenu, handleClick, handleContextMenu, makeFiles } =
    useMakeFiles();

  console.log(Object.keys(options));

  return (
    <div
      className="w-full h-full"
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      {showMenu && (
        <ul
          className="absolute flex flex-col z-50 bg-gray shadow-menu"
          style={{
            top: pos.y,
            left: pos.x,
          }}
        >
          {Object.keys(options).map((opt) => (
            <li key={opt} onClick={() => makeFiles(options[opt])}>
              {options[opt].name}
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
}
