"use client";

import { WindowItem, windowState } from "@/recoil/window/windowState";
import Image from "next/image";
import { useState } from "react";
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
  let initialX = isWindow.length * 10;
  let initialY = isWindow.length * 10;

  // 로고의 최종 위치 상태
  const [logoPos, setLogoPos] = useState({ x: initialX, y: initialY });

  const bindLogoPos = useDrag(
    (state) => {
      const {
        down,
        movement: [mx, my],
      } = state;
      if (down) {
        // 초기 위치에서 이동량을 더해 위치 업데이트
        setLogoPos({ x: mx, y: my });
      } else {
        // 드래그 중의 마지막 위치를 초기 위치로 설정
        setLogoPos((prev) => {
          initialX = prev.x;
          initialY = prev.y;
          return prev;
        });
      }
    },
    {
      initial: () => [logoPos.x, logoPos.y], // 드래그 시작 시의 로고 위치
    }
  );

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
            src={`/image/icon/${props.name}.webp`}
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
