import React, { useEffect, useRef, useState } from "react";

export default function useDrag(size: React.RefObject<HTMLDivElement>) {
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [movePos, setMovePos] = useState({
    left: 0,
    top: 0,
    right: false,
    bottom: false,
  });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const dragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const left = e.clientX - startPos.x;
        const top = e.clientY - startPos.y;
        setMovePos((prev) => ({ ...prev, left, top }));
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
