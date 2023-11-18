import React from "react";
import { styled } from "styled-components";
import useDrag from "../../../hooks/useDrag";

type PosProps = {
  pos: {
    x: number;
    y: number;
  };
};

export default function ItemOpen() {
  const { containerRef, movePos, dragStart } = useDrag();

  return (
    <Container
      ref={containerRef}
      onMouseDown={(e) => dragStart(e)}
      pos={movePos}
    >
      <Drag></Drag>
    </Container>
  );
}

const Container = styled.div<PosProps>`
  position: absolute;
  width: 200px;
  height: 300px;
  z-index: 2;
  background-color: white;
  left: ${(props) => props.pos.x};
  top: ${(props) => props.pos.y};
`;

const Drag = styled.div`
  width: 100%;
  height: 100%;
`;
