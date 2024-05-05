"use client";

import Image from "next/image";
import React, { useState } from "react";
import WindowFrame from "../(common)/(window)/windowFrame";

export interface IconImgProps {
  name: string;
  url: string;
  components: React.ReactNode;
  menu: boolean;
}

export default function IconImg(props: IconImgProps) {
  const { name, url, components, menu } = props;

  const [isClick, setIsClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsClick((prev) => !prev);
    setIsOpen((prev) => !prev);
  };

  return (
    <li
      className={`${menu ? "border-b-2 border-[#7f8279] border-solid" : undefined} hover:bg-[#1F55BB]`}
    >
      <div
        onDoubleClick={handleClick}
        className={`relative flex ${menu ? "flex-row" : "flex-col"} items-center gap-1 p-[5px] cursor-pointer`}
      >
        <Image
          width={menu ? 24 : 50}
          height={menu ? 24 : 50}
          src={url}
          alt={name}
        />
        <span>{name}</span>
      </div>
      {/* 실행 창 open */}
      {isOpen && (
        <WindowFrame props={props} handleClick={handleClick}>
          {components}
        </WindowFrame>
      )}
    </li>
  );
}
