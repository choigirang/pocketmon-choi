import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import useDrag from "../../../hooks/useDrag";
import { PosProps } from "@/types/props";

export default function ItemOpen({
  size,
}: {
  size: React.RefObject<HTMLDivElement>;
}) {
  const { containerRef, movePos, dragStart } = useDrag(size);

  return (
    <Container
      ref={containerRef}
      onMouseDown={dragStart}
      $pos={movePos}
    ></Container>
  );
}

const Container = styled.div<PosProps>`
  position: absolute;
  width: 200px;
  height: 300px;
  z-index: 2;
  background-color: white;
  left: ${(props) => props.$pos.left + "px"};
  top: ${(props) => props.$pos.top + "px"};
`;
