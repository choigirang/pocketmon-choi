import React, { useState } from "react";

const movePoint = {
  front: 0,
  back: 0,
  left: 0,
  right: 0,
};

export default function useMoveClass() {
  const [character, setCharacter] = useState({ x: 0, y: 0 });
  const [moveClass, setMoveClass] = useState("bg-front");

  const handleSetMoveClass = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown") {
      setMoveClass("bg-front");
    }
  };

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
      if (newX + 60 <= 865) {
        setCharacter({ ...character, x: newX });
      }
    }
  };

  return { character, moveClass, handleMove };
}
