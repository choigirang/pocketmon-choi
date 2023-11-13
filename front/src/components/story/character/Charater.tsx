import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

export default function Character() {
  const [character, setCharacter] = useState({ x: 200, y: 200 });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleMove = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp") {
      const newY = character.y - 40;
      if (newY >= 0) {
        setCharacter({ ...character, y: newY });
      }
    } else if (e.key === "ArrowDown") {
      const newY = character.y + 40;
      if (newY + 100 <= 600) {
        setCharacter({ ...character, y: newY });
      }
    } else if (e.key === "ArrowLeft") {
      const newX = character.x - 40;
      if (newX >= 0) {
        setCharacter({ ...character, x: newX });
      }
    } else if (e.key === "ArrowRight") {
      const newX = character.x + 40;
      if (newX + 60 <= 800) {
        setCharacter({ ...character, x: newX });
      }
    }
  };

  return (
    <Trainer
      tabIndex={0}
      onKeyDown={handleMove}
      style={{ top: `${character.y}px`, left: `${character.x}px` }}
      className="bg-front"
    />
  );
}

const Trainer = styled.div`
  position: absolute;
`;
