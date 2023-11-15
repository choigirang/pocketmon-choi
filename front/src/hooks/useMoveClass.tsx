import React, { useState } from "react";

const movePoint = {
  front: 0,
  back: 0,
  left: 0,
  right: 0,
};

const eachMoveClass = {
  ArrowUp: {},
};

type MoveDirection = {
  x?: number;
  y?: number;
};

export default function useMoveClass() {
  const [character, setCharacter] = useState({ x: 0, y: 0 });
  const [moveClass, setMoveClass] = useState("bg-front");

  const handleMove = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;

    const moveDirections: { [key: string]: MoveDirection } = {
      ArrowUp: { y: -64 },
      ArrowDown: { y: 64 },
      ArrowLeft: { x: -64 },
      ArrowRight: { x: 64 },
    };

    const direction = moveDirections[key];
    if (direction) {
      const { x, y } = direction;
      const newX = character.x + x;
      const newY = character.y + y;

      if (isValidMove(newX, newY)) {
        setCharacter({ ...character, x: newX, y: newY });
      }
    }
  };

  const isValidMove = (newX: number, newY: number) => {
    return newX >= 0 && newX + 60 <= 865 && newY >= 0 && newY + 100 <= 700;
  };

  return { character, moveClass, handleMove };
}
