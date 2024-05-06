"use client";

import { WindowItem, windowState } from "@/recoil/window/atom";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDrag } from "react-use-gesture";
import { useRecoilValue } from "recoil";
import Buttons from "./buttons.tsx";

interface WindowProps {
  props: WindowItem;
  children: React.ReactNode;
}

/* 2024/05/06 - window frame 안에 열 프로그램 children */
export default function WindowFrame({ props, children }: WindowProps) {
  const isWindow = useRecoilValue(windowState);

  /* 이미 열린 창 있을 시 위치 조정 */
  const [logoPos, setlogoPos] = useState({
    x: isWindow.length * 10,
    y: isWindow.length * 10,
  });

  /* 드래그 */
  const bindLogoPos = useDrag(({ offset }) => {
    setlogoPos((prev) => ({
      x: prev.x + offset[0],
      y: prev.y + offset[1],
    }));
  });

  return (
    // 드래그
    <div
      className="flex flex-col gap-1 w-[500px] h-[300px] absolute p-1 z-100 bg-gray border-5 border-[rgb(192, 192, 192)] shadow-common"
      {...bindLogoPos()}
      style={{ top: logoPos.y, left: logoPos.x }}
    >
      {/* 상단바 */}
      <div className="flex justify-between w-full p-[5px] bg-[#808080]">
        <div className="flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/image/${props.name}.webp`}
            alt={props.name}
          />
          <span>{props.name}</span>
        </div>
        <Buttons {...props} />
      </div>
      {/* 목록 */}
      <ul></ul>
      {/* 열릴 프로그램 */}
      {children}
    </div>
  );
}
