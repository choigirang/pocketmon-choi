import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import useDrag from "../../../hooks/useDrag";
import { PosProps } from "@/types/props";

export default function ItemOpen({
  size,
}: {
  size: React.RefObject<HTMLDivElement>;
}) {
  const [pos, setPos] = useState<string>("");
  const { containerRef, movePos, dragStart } = useDrag(size);

  return (
    <Container ref={containerRef} onMouseDown={(e) => dragStart(e)} pos={pos}>
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
`;

const Drag = styled.div`
  width: 100%;
  height: 100%;
`;
