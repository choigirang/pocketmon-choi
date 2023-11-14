import useMoveClass from "@/hooks/useMoveClass";
import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const move = {
  front: 0,
  back: 0,
  left: 0,
};

export default function PartTwoStory() {
  const characterRef = useRef<HTMLDivElement>(null);

  const { moveClass, character, handleMove } = useMoveClass();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 포커스를 설정합니다.
    characterRef.current?.focus();
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행됩니다.

  return (
    <Bg>
      <Character
        tabIndex={0}
        onKeyDown={handleMove}
        style={{ top: `${character.y}px`, left: `${character.x}px` }}
        ref={characterRef}
        className={moveClass}
      />
    </Bg>
  );
}

const Bg = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
  background-image: url("/image/bg-home.png");
`;

const Character = styled.div`
  position: absolute;
`;
