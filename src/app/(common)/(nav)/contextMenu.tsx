"use client";

import useWindowAtom from "@/hooks/useWindowAtom";
import { WindowItem } from "@/recoil/window/windowState";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export interface ContextMenu {
  pos: { x: number; y: number };
  setContextMenu: Dispatch<SetStateAction<boolean>>;
  list: WindowItem;
}

const lists = ["Open", "Exit"];

/** 2024/05/07 - 우클릭 시 open menu */
export default function ContextMenu(props: ContextMenu) {
  const { handleOnOff } = useWindowAtom(props.list);
  const ref = useRef<HTMLUListElement>(null);
  const [refSize, setRefSize] = useState(0);

  useEffect(() => {
    /** ul 사이즈 초깃값 설정 */
    if (ref.current) {
      setRefSize(ref.current.offsetHeight);
    }

    /** 외부 클릭 시 menu off */
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        props.setContextMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (func: string) => {
    handleOnOff(func);
    props.setContextMenu(false);
  };

  return (
    <ul
      ref={ref}
      className="absolute bg-gray shadow-menu"
      style={{ top: props.pos.y - refSize, left: props.pos.x }}
    >
      {lists.map((list) => (
        <li
          key={list}
          className={`${lists[0] === list && "font-bold"} text-xs py-1 px-2 border-b-[1px] border-solid border-[#7f8279] hover:bg-white`}
          onClick={() => handleClick(list)}
        >
          <span className="underline">{list[0]}</span>
          {list.slice(1)}
        </li>
      ))}
    </ul>
  );
}
