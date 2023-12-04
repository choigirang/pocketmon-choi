import { StrScript } from "@/constant/constant";
import { CharacterAtom } from "@/recoil/openAboutCharacter/characterAtom";
import { SelectDataAtom } from "@/recoil/openAboutCharacter/selectDataAtom";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

type MoveDirection = {
  x?: number;
  y?: number;
};

export default function useHandleDataPage() {
  // 캐릭터 좌표값
  const [character, setCharacter] = useState({ x: 0, y: 96 });
  // img-sprite 클래스명 지정
  const [moveClass, setMoveClass] = useState("bg-front");
  // 아이템창 선택 번호
  const [selectNum, setSelectNum] = useState<number>(0);

  // 아이템 & 스탯창 open 상태값
  const [status, setStatus] = useRecoilState(CharacterAtom);
  // 선택한 아이템 데이터
  const [data, setData] = useRecoilState(SelectDataAtom);

  // 이동 방향과 좌표값 변경
  const moveCharacter = (direction: MoveDirection) => {
    setCharacter((prev) => ({ ...prev, ...direction }));
  };

  // 캐릭터 이동
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

  // 아이템창 & 스탯창
  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;

    if (!status.ITEM && !status.STATUS) arrowMove(key);

    switch (key) {
      case "i":
      case "Escape":
        setStatus((prev) => ({ ...prev, ITEM: !prev.ITEM }));
        setData("");
        break;
      case "Backspace":
        setData("");
      case "s":
        setStatus((prev) => ({ ...prev, STATUS: !prev.STATUS }));
        break;
      default:
        break;
    }
  };

  // 아이템창/스탯 선택
  const handleArrow = (
    DATA: StrScript,
    e: React.KeyboardEvent<HTMLDivElement>
  ) => {
    console.log(e.key);
    const ObjectLength = Object.keys(DATA).length;
    if (e.key === "ArrowDown" && selectNum !== ObjectLength - 1) {
      setSelectNum((prev) => prev + 1);
    }
    if (e.key === "ArrowUp" && selectNum !== 0)
      setSelectNum((prev) => prev - 1);
    if (e.key === "Enter") {
      setData(DATA[Object.keys(DATA)[selectNum]]);
    }
  };

  return {
    status,
    selectNum,
    character,
    moveClass,
    handleKey,
    handleArrow,
  };
}
