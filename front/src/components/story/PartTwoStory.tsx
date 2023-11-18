import useMoveClass from "@/hooks/useMoveClass";
import { CharacterAtom } from "@/recoil/openAboutCharacter/characterAtom";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import ItemOpen from "./character/ItemOpen";

export default function PartTwoStory() {
  const characterRef = useRef<HTMLDivElement>(null);

  const { moveClass, character, handleMove } = useMoveClass();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 포커스를 설정합니다.
    characterRef.current?.focus();
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행됩니다.

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

    // 컴포넌트 언마운트 시 이벤트 리스너를 정리합니다.
    return () => {
      document.removeEventListener("keydown", handleKeyboardWindow);
    };
  }, []);

  useEffect(() => {
    console.log(status.ITEM);
  }, [status.ITEM]);

  return (
    <Bg>
      <Character
        tabIndex={0}
        onKeyDown={handleMove}
        style={{ top: `${character.y}px`, left: `${character.x}px` }}
        ref={characterRef}
        className={moveClass}
      />
      {status.ITEM && <ItemOpen />}
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
