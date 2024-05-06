"use client";

import useHandleCharacter from "@/hooks/useHandleCharacter";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* 2024/05/05 - hook을 사용한 캐릭터 이미지 전환 및 위치 전환 */
export default function Trainer() {
  const { moveClass, character, arrowMove } = useHandleCharacter();

  const trainerRef = useRef<HTMLImageElement>(null);

  /** image에 대한 이벤트 추가를 위한 focus */
  useEffect(() => {
    if (trainerRef.current) {
      trainerRef.current.focus();
    }
  }, []);

  return (
    <Image
      src={`/image/trainer/${moveClass}.webp`}
      alt="character"
      width={32}
      height={32}
      className="absolute focus:outline-none"
      style={{ left: character.x, top: character.y }}
      onKeyDown={(e) => arrowMove(e)}
      tabIndex={0}
      ref={trainerRef}
    />
  );
}
