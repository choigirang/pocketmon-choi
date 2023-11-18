import React from "react";
import { styled } from "styled-components";
import useDrag from "../../../hooks/useDrag";

export default function ItemOpen() {
  const {
    containerRef,
    dragComponentRef,
    pos,
    dragStartHandler,
    dragHandler,
    dragOverHandler,
    dragEndHandler,
  } = useDrag();

  return (
    <Container ref={containerRef}>
      <Drag
        ref={dragComponentRef}
        draggable
        onDragStart={dragStartHandler}
        onDrag={dragHandler}
        onDragOver={dragOverHandler}
        onDragEnd={dragEndHandler}
        style={{ left: pos.left, top: pos.top }}
      ></Drag>
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  height: 300px;
  z-index: 2;
  background-color: white;
`;

const Drag = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
