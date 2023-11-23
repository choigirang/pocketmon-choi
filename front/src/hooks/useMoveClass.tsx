import { CharacterAtom } from "@/recoil/openAboutCharacter/characterAtom";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

type MoveDirection = {
  x?: number;
  y?: number;
};

export default function useMoveClass() {
  const [character, setCharacter] = useState({ x: 0, y: 96 });
  const [moveClass, setMoveClass] = useState("bg-front");
  const [status, setStatus] = useRecoilState(CharacterAtom);

  const moveCharacter = (direction: MoveDirection) => {
    setCharacter((prev) => ({ ...prev, ...direction }));
  };

  const arrowMove = (key: string) => {
    switch (key) {
      case "ArrowUp":
        setMoveClass(moveClass !== "bg-back" ? "bg-back" : "bg-back1");
        if (character.x >= 0 && character.x <= 352 && character.y === 96) {
          return;
        }
        if (character.x >= 384 && character.y === 32) {
          return;
        }
        moveCharacter({ y: character.y - 32 });
        break;
      case "ArrowDown":
        setMoveClass(moveClass !== "bg-front" ? "bg-front" : "bg-front1");
        if (character.y >= 512) return;
        moveCharacter({ y: character.y + 32 });
        break;
      case "ArrowLeft":
        setMoveClass(moveClass !== "bg-left" ? "bg-left" : "bg-left1");
        if (character.x === 0) return;
        if (character.x === 384 && character.y < 96) return;
        moveCharacter({ x: character.x - 32 });
        break;
      case "ArrowRight":
        setMoveClass(moveClass !== "bg-right" ? "bg-right" : "bg-right1");
        if (character.x === 736) return;
        moveCharacter({ x: character.x + 32 });
        break;
      default:
        break;
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;

    arrowMove(key);

    switch (key) {
      case "i":
        setStatus((prev) => ({ ...prev, ITEM: !prev.ITEM }));
        break;
      case "s":
        setStatus((prev) => ({ ...prev, STATUS: !prev.STATUS }));
        break;
      default:
        break;
    }
  };

  return { status, character, moveClass, handleKey };
}
