import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

export default function PartTwoStory() {
  const [character, setCharacter] = useState({ x: 0, y: 0 });

  const characterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 포커스를 설정합니다.
    characterRef.current?.focus();
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행됩니다.

  const handleMove = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp") {
      const newY = character.y - 64;
      if (newY >= 0) {
        setCharacter({ ...character, y: newY });
      }
    } else if (e.key === "ArrowDown") {
      const newY = character.y + 64;
      if (newY + 100 <= 700) {
        setCharacter({ ...character, y: newY });
      }
    } else if (e.key === "ArrowLeft") {
      const newX = character.x - 64;
      if (newX >= 0) {
        setCharacter({ ...character, x: newX });
      }
    } else if (e.key === "ArrowRight") {
      const newX = character.x + 64;
      console.log(character.x);
      if (newX + 60 <= 865) {
        setCharacter({ ...character, x: newX });
      }
    }
  };
  return (
    <Bg>
      <Character
        tabIndex={0}
        onKeyDown={handleMove}
        style={{ top: `${character.y}px`, left: `${character.x}px` }}
        className="bg-front"
        ref={characterRef}
      />
    </Bg>
  );
}

const Bg = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
  background-color: white;
`;

const Character = styled.div`
  position: absolute;
`;
