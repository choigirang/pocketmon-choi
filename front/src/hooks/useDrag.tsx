import React, { useRef, useState } from "react";

export default function useDrag() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragComponentRef = useRef<HTMLDivElement>(null);
  const [originPos, setOriginPos] = useState({ x: 0, y: 0 });
  const [clientPos, setClientPos] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ left: 0, top: 0 });

  const dragStartHandler = (e: any) => {
    const blankCanvas: any = document.createElement("canvas");
    blankCanvas.classList.add("canvas");
    e.dataTransfer?.setDragImage(blankCanvas, 0, 0);
    document.body?.appendChild(blankCanvas);
    e.dataTransfer.effectAllowed = "move";

    const originPosTemp = { ...originPos };
    originPosTemp["x"] = e.target.offsetLeft;
    originPosTemp["y"] = e.target.offsetTop;
    console.log("originPropsTemp", originPosTemp);
    setOriginPos(originPosTemp);

    const clientPosTemp = { ...clientPos };
    clientPosTemp["x"] = e.clientX;
    clientPosTemp["y"] = e.clientY;
    setClientPos(clientPosTemp);
  };

  const dragHandler = (e: any) => {
    const posTemp = { ...pos };
    posTemp["left"] = e.target.offsetLeft + e.clientX - clientPos.x;
    posTemp["top"] = e.target.offsetTop + e.clientY - clientPos.y;
    setPos(posTemp);

    const clientPosTemp = { ...clientPos };
    clientPosTemp["x"] = e.clientX;
    clientPosTemp["y"] = e.clientY;
    setClientPos(clientPosTemp);
  };

  const dragOverHandler = (e: any) => {
    e.preventDefault();
  };

  const dragEndHandler = (e: any) => {
    if (!isInsideDragArea(e)) {
      const posTemp = { ...pos };
      posTemp["left"] = originPos.x;
      posTemp["top"] = originPos.y;
      setPos(posTemp);
    }

    const canvases = document.getElementsByClassName("canvas");
    for (let i = 0; i < canvases.length; i++) {
      let canvas = canvases[i];
      canvas.parentNode?.removeChild(canvas);
    }

    document.body.removeAttribute("style");
  };

  const isInsideDragArea = (e: any) => {
    if (e.target.clientX < 800 || e.target.clientY < 600) {
      return true;
    }
  };

  return {
    containerRef,
    dragComponentRef,
    pos,
    dragStartHandler,
    dragHandler,
    dragOverHandler,
    dragEndHandler,
  };
}
