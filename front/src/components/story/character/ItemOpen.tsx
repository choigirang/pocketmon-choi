import React, {
  KeyboardEvent,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { styled } from "styled-components";
import useDrag from "../../../hooks/useDrag";
import { ItemOpenProps, PosProps } from "@/types/props";
import { BACK_PACK } from "@/constant/constant";
import { MdArrowRight } from "react-icons/md";
import { lightAni } from "@/styles/animation";
import useHandleDataPage from "@/hooks/useHandleDataPage";

export default function ItemOpen({
  parentRef,
  selectNum,
  $status,
}: ItemOpenProps) {
  const { containerRef, movePos, dragStart, dragEnd } = useDrag(parentRef);

  return (
    <Container
      ref={containerRef}
      onMouseDown={dragStart}
      onDragEnd={dragEnd}
      $pos={movePos}
      $status={$status}
      draggable
    >
      <BackPack>
        <Title>가방</Title>
        {Object.keys(BACK_PACK).map((skill, idx) => (
          <Item key={idx}>
            {selectNum === idx && (
              <MdArrowRight className="icon"></MdArrowRight>
            )}
            {skill}
          </Item>
        ))}
      </BackPack>
    </Container>
  );
}

const Container = styled.div<PosProps>`
  position: absolute;
  width: 300px;
  height: 400px;
  padding: 5px;
  border: solid 4px black;
  border-radius: 10px;
  background-color: white;
  left: ${(props) => props.$pos.left + "px"};
  top: ${(props) => props.$pos.top + "px"};
  transform: ${(props) => !props.$status.ITEM && "scale(0)"};
  transition: all 0.1s;
`;

const BackPack = styled.ul`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: solid 4px black;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  .icon {
    animation: ${lightAni} 1s infinite;
  }
`;

const Title = styled.li`
  font-family: var(--font-14);
  font-size: 25px;
  font-weight: bolder;
  -webkit-text-stroke: 0.5px black;
`;

const Item = styled.li`
  font-family: var(--font-14);
  font-size: 21px;
  padding-left: 10px;
`;
