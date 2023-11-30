import React, { useRef, useState } from "react";

/**
 * ItemOpen 컴포넌트의 드래그 이동을 위한 훅
 * @param {React.RefObject<HTMLDivElement>} size getBoundingClientRect를 사용하여 확인 할 부모 좌표값(이탈 여부)
 */
export default function useDrag(size: React.RefObject<HTMLDivElement>) {
  // 클릭 했을 때의 마우스 위치 초깃값
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  // 드래그를 발생시켰을 때의 이동한 값
  const [movePos, setMovePos] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  // ItemOpen
  const containerRef = useRef<HTMLDivElement>(null);

  // ItemOpen size
  const checkChildRefSize = containerRef.current?.getBoundingClientRect();
  // PartTwoStory
  const checkParentRefSize = size.current?.getBoundingClientRect();

  // 드래그 시작
  const dragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - movePos.left,
      y: e.clientY - movePos.top,
    });
  };

  // dragEnd에서 설정해주기
  const dragEnd = (e: React.MouseEvent) => {
    const left = e.clientX - startPos.x;
    const top = e.clientY - startPos.y;

    setMovePos((prev) => ({
      ...prev,
      left: left,
      top: top,
    }));
    if (!checkChildRefSize || !checkParentRefSize) return;

    // 부모 요소 이탈값 확인
    if (checkChildRefSize.top < checkParentRefSize.top) {
      setMovePos((prev) => ({ ...prev, top: 0 }));
    }
    if (checkChildRefSize.bottom > checkParentRefSize.bottom) {
      const reSize = checkParentRefSize.bottom - checkChildRefSize.bottom;
      setMovePos((prev) => ({ ...prev, top: prev.top + reSize }));
    }

    // x축 벗어났을 때
    if (checkChildRefSize.left < checkParentRefSize.top) {
      setMovePos((prev) => ({ ...prev, left: 0 }));
    }
    if (checkChildRefSize.right > checkParentRefSize.right) {
      const reSize = checkParentRefSize.right - checkChildRefSize.right;
      setMovePos((prev) => ({ ...prev, left: prev.left + reSize }));
    }
    setIsDragging(false);
  };

  return { containerRef, movePos, dragStart, dragEnd };
}
