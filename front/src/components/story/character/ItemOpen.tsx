import React from "react";
import { useRecoilValue } from "recoil";
import { MdArrowRight } from "react-icons/md";

import useDrag from "../../../hooks/useDrag";
import { ItemOpenProps, PosProps } from "@/types/props";
import { BACK_PACK } from "@/constant/constant";
import { SelectDataAtom } from "@/recoil/openAboutCharacter/selectDataAtom";

import { styled } from "styled-components";
import { lightAni } from "@/styles/animation";

/**
 * pokemon/save 에서 키보드 이벤트 발생 시 열릴 아이템 목록
 * @param {React.RefObject<HTMLDivElement>} parentRef 아이템창을 드래그하여 옮길 시, 부모 위치 이탈 여부 확인을 위한 ref
 * @param {number} selectNum 아이템 목록 선택 시, 선택한 숫자에 해당하는 인덱스
 * @param {Item: boolean, Status: boolean} $status 아이템창 or 상태창 열람 상태를 위한 값
 */
export default function ItemOpen({
  parentRef,
  selectNum,
  $status,
}: ItemOpenProps) {
  // 선택한 아이템에 대한 내용
  const data = useRecoilValue(SelectDataAtom);
  // 드래그 관련 훅
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
        {!data ? (
          // 선택한 아이템이 없을 시 보여질 아이템 목록
          <React.Fragment>
            <Title>가방</Title>
            {Object.keys(BACK_PACK).map((skill, idx) => (
              <Item key={idx}>
                {selectNum === idx && (
                  <MdArrowRight className="icon"></MdArrowRight>
                )}
                {skill}
              </Item>
            ))}
          </React.Fragment>
        ) : (
          // 선택한 아이템에 해당하는 설명
          <React.Fragment>
            <Title>{Object.keys(BACK_PACK)[selectNum]}</Title>
            <DataContent>{data}</DataContent>
          </React.Fragment>
        )}
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

// 아이템창 border 값을 위한
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

const DataContent = styled.li`
  margin-top: 20px;
`;
