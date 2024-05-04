"use client";

import Image from "next/image";
import React, { useState } from "react";
import WindowFrame from "../(common)/(window)/windowFrame";

export interface IconImgProps {
  name: string;
  url: string;
  components: React.ReactNode;
}

export default function IconImg(props: IconImgProps) {
  const [isClick, setIsClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsClick((prev) => !prev);
    setIsOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <div
        onDoubleClick={handleClick}
        className="relative flex flex-col items-center gap-1 p-[5px] cursor-pointer"
      >
        {/* 클릭 시 배경 */}
        {isClick && (
          <div className="absolute w-[80px] h-[80px] bg-[#1F55BB] opacity-70 border-2 border-white border-dashed" />
        )}
        <Image width={50} height={50} src={props.url} alt={props.name} />
        <span>{props.name}</span>
      </div>
      {/* 실행 창 open */}
      {isOpen && (
        <WindowFrame props={props} handleClick={handleClick}>
          {props.components}
        </WindowFrame>
      )}
    </React.Fragment>
  );
}
