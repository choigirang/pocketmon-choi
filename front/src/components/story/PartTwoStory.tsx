import useMoveClass from "@/hooks/useMoveClass";
import { CharacterAtom } from "@/recoil/openAboutCharacter/characterAtom";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import ItemOpen from "./character/ItemOpen";
import { CharacterPos } from "@/types/props";

export default function PartTwoStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);

  const { moveClass, character, handleMove } = useMoveClass();

  useEffect(() => {
    characterRef.current?.focus();
  }, []);

  const [status, setStatus] = useRecoilState(CharacterAtom);

  useEffect(() => {
    const handleKeyboardWindow = (e: KeyboardEvent) => {
      const key = e.key;
      switch (key) {
        case "i":
          setStatus({ ...status, ITEM: !status.ITEM });
          console.log(status);
          break;
        case "s":
          setStatus({ ...status, STATUS: !status.STATUS });
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyboardWindow);

    return () => {
      document.removeEventListener("keydown", handleKeyboardWindow);
    };
  }, []);

  return (
    <Bg ref={containerRef}>
      <Character
        tabIndex={0}
        onKeyDown={handleMove}
        left={character.x}
        top={character.y}
        ref={characterRef}
        className={moveClass}
      />
      {status.ITEM && <ItemOpen size={containerRef} />}
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
  left: ${(props) => `${props.left}px`};
  top: ${(props) => `${props.top}px`};
`;
