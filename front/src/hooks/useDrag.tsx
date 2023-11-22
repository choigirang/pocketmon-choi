import React, { useEffect, useRef, useState } from "react";

export default function useDrag(size: React.RefObject<HTMLDivElement>) {
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [movePos, setMovePos] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkChildRefSize = containerRef.current?.getBoundingClientRect();
  const checkParentRefSize = size.current?.getBoundingClientRect();

  const dragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - movePos.left,
      y: e.clientY - movePos.top,
    });
  };

  useEffect(() => {
    if (!checkChildRefSize || !checkParentRefSize) return;

    // y축 벗어났을 때
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

    const handleMouseMove = (e: MouseEvent) => {
      const left = e.clientX - startPos.x;
      const top = e.clientY - startPos.y;

      setMovePos((prev) => ({
        ...prev,
        left: left,
        top: top,
      }));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startPos]);

  return { containerRef, movePos, dragStart };
}
