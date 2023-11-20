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
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const left = e.clientX - startPos.x;
        const top = e.clientY - startPos.y;

        setMovePos((prev) => ({
          ...prev,
          left: left,
          top: top,
        }));
      }
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
