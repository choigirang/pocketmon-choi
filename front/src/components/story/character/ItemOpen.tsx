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

  console.log(movePos);
  return (
    <Container
      ref={containerRef}
      onMouseDown={(e) => dragStart(e)}
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
  /* ${(props) => {
    const pos = props.$pos;

    // parent bottom size over
    if (pos.bottom) {
      console.log("css parent bottom over");

      return `left: ${pos.left}px; bottom: 0`;
    }

    // parent right size over
    if (pos.right) {
      console.log("css parent right over");
      return `top: ${pos.top}px; right: 0px`;
    }

    return `left: ${pos.left}px; top: ${pos.top}px`;
  }} */
`;
