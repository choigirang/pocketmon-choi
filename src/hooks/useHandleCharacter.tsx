import React, { KeyboardEvent, useEffect, useState } from "react";

type MoveDirection = {
  x?: number;
  y?: number;
};

export default function useHandleCharacter() {
  // 캐릭터 좌표값
  const [character, setCharacter] = useState({ x: 0, y: 60 });
  // img-sprite 클래스명 지정
  const [moveClass, setMoveClass] = useState("front");

  // 이동 방향과 좌표값 변경
  const moveCharacter = (direction: MoveDirection) => {
    setCharacter((prev) => ({ ...prev, ...direction }));
  };

  // 캐릭터 이동
  const arrowMove = (e: KeyboardEvent<HTMLImageElement>) => {
    const { key } = e;
    const img = 32;
    const x = character.x;
    const y = character.y;

    switch (key) {
      case "ArrowUp":
        setMoveClass(moveClass !== "back" ? "back" : "back1");
        // 시작점 및 가구 제외
        if (x <= 240 && y <= 60) return;
        // 벽 제외
        if (y <= 30) return;
        moveCharacter({ y: y - 16 });
        break;
      case "ArrowDown":
        setMoveClass(moveClass !== "front" ? "front" : "front1");
        // 화면 크기
        if (y >= 250 - img) return;
        moveCharacter({ y: y + 16 });
        break;
      case "ArrowLeft":
        setMoveClass(moveClass !== "left" ? "left" : "left1");
        // 화면 크기
        if (x <= 0) return moveCharacter({ x: 0 });
        // 가구 제외
        if (x <= 250 && y <= 30) return;
        moveCharacter({ x: x - 16 });
        break;
      case "ArrowRight":
        setMoveClass(moveClass !== "right" ? "right" : "right1");
        // 화면 크기
        if (x >= 490 - img) return moveCharacter({ x: 490 - img });
        moveCharacter({ x: x + 16 });
        break;
      default:
        break;
    }
  };

  return {
    character,
    moveClass,
    arrowMove,
  };
}
