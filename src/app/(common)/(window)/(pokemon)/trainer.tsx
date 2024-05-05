"use client";

import useHandleCharacter from "@/hooks/useHandleCharacter";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Trainer() {
  const { moveClass, character, arrowMove } = useHandleCharacter();

  const trainerRef = useRef<HTMLImageElement>(null);

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
