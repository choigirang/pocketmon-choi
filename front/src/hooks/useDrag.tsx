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
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const left = e.clientX - startPos.x;
        const top = e.clientY - startPos.y;

        console.log(left, top);
        setMovePos((prev) => ({
          ...prev,
          left: prev.left + left,
          top: prev.top + top,
        }));

        // // parent size over
        // if (!checkChildRefSize || !checkParentRefSize) return;

        // // parent bottom size over
        // if (checkChildRefSize.bottom < checkParentRefSize.bottom) {
        //   setMovePos((prev) => ({ ...prev, bottom: 0 }));
        // } else {
        //   setMovePos((prev) => ({ ...prev, bottom: 1 }));
        // }

        // // parent right size over
        // if (checkChildRefSize.right < checkParentRefSize.right) {
        //   setMovePos((prev) => ({ ...prev, top: 0 }));
        // } else {
        //   setMovePos((prev) => ({ ...prev, top: 1 }));
        // }

        // // parent top size over
        // if (checkChildRefSize.top > checkParentRefSize.top) {
        //   setMovePos((prev) => ({ ...prev, top: 0 }));
        // }

        // // parent left size over
        // if (checkChildRefSize.left > checkParentRefSize.left) {
        //   setMovePos((prev) => ({ ...prev, left: 0 }));
        // }
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
