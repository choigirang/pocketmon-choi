"use client";

import { IconImgProps } from "@/app/(home)/iconImg";
import Image from "next/image";
import { useState } from "react";
import { useDrag } from "react-use-gesture";

interface WindowProps {
  props: IconImgProps;
  handleClick: () => void;
  children: React.ReactNode;
}

export default function WindowFrame({
  props,
  handleClick,
  children,
}: WindowProps) {
  const [logoPos, setlogoPos] = useState({ x: 0, y: 0 });
  const bindLogoPos = useDrag((params) => {
    setlogoPos({
      x: params.offset[0],
      y: params.offset[1],
    });
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
          <Image width={16} height={16} src={props.url} alt={props.name} />
          <span>{props.name}</span>
        </div>
        <button
          type="button"
          className="w-[15px] h-full text-sm bg-gray text-zinc-800 shadow-common"
          onClick={handleClick}
        >
          X
        </button>
      </div>
      {/* 목록 */}
      <ul></ul>
      {children}
    </div>
  );
}
