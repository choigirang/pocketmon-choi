import { useEffect, useRef, useState } from "react";

// useDrag 훅
export default function useDrag() {
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const dragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - (containerRef.current?.getBoundingClientRect().left || 0),
      y: e.clientY - (containerRef.current?.getBoundingClientRect().top || 0),
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        const x = e.clientX - startPos.x;
        const y = e.clientY - startPos.y;
        containerRef.current.style.left = `${x}px`;
        containerRef.current.style.top = `${y}px`;
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

  return { containerRef, movePos: startPos, dragStart };
}
