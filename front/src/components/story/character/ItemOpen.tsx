import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import useDrag from "../../../hooks/useDrag";

type PosProps = {
  pos: {
    left: number;
    top: number;
  };
};

export default function ItemOpen({
  size,
}: {
  size: React.RefObject<HTMLDivElement>;
}) {
  const [checkOver, setCheckOver] = useState({
    right: false,
    bottom: false,
  });
  const { containerRef, movePos, dragStart } = useDrag();

  useEffect(() => {
    // right Over check
    const childRightPos = containerRef.current!.getBoundingClientRect().right;
    const parentRightPos = size.current!.getBoundingClientRect().right;

    // bottom Over check
    const childBtmPos = containerRef.current!.getBoundingClientRect().bottom;
    const parentBtmPos = size.current!.getBoundingClientRect().bottom;

    if (childBtmPos > parentBtmPos) {
      setCheckOver((prev) => ({ ...prev, bottom: true }));
    } else {
      setCheckOver((prev) => ({ ...prev, bottom: false }));
    }

    if (childRightPos > parentRightPos) {
      setCheckOver((prev) => ({ ...prev, right: true }));
    } else {
      setCheckOver((prev) => ({ ...prev, right: false }));
    }
  }, [movePos]);

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
  left: ${(props) => `${props.pos.left}px`};
  top: ${(props) => `${props.pos.top}px`};
`;

const Drag = styled.div`
  width: 100%;
  height: 100%;
`;
