import useMoveClass from "@/hooks/useMoveClass";
import { CharacterAtom } from "@/recoil/openAboutCharacter/characterAtom";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import ItemOpen from "./character/ItemOpen";
import { CharacterPos, dataPageProps } from "@/types/props";

export default function PartTwoStory({
  status,
  character,
  moveClass,
}: dataPageProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <Bg ref={parentRef}>
      <Character $left={character.x} $top={character.y} className={moveClass} />
      <ItemOpen parentRef={parentRef} />
    </Bg>
  );
}

const Bg = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
  background-image: url("/image/bg-home.png");
`;

const Character = styled.div<CharacterPos>`
  position: absolute;
  left: ${(props) => `${props.$left}px`};
  top: ${(props) => `${props.$top}px`};
`;
