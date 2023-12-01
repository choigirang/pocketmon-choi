import React, { useRef } from "react";

import ItemOpen from "./character/ItemOpen";
import { CharacterPos, dataPageProps } from "@/types/props";

import { styled } from "styled-components";

/**
 * pokemon/story에서 사용될 컴포넌트
 * @param {Item: boolean, Status: boolean} status 아이템창 or 스텟창 확인 recoil 값
 * @param {x: number, y: number} character 캐릭터 이동을 추적할 좌표값
 * @param {seletNum} selectNum 아이템 목록 중 선택한 아이템 인덱스
 * @param {string} moveClass 커스텀 훅으로 전해받은 이미지 스프라이트 className
 */
export default function PartTwoStory({
  status,
  character,
  selectNum,
  moveClass,
}: dataPageProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <Bg ref={parentRef}>
      <Character $left={character.x} $top={character.y} className={moveClass} />
      {status.ITEM && (
        <ItemOpen
          parentRef={parentRef}
          selectNum={selectNum}
          $status={status}
        />
      )}
    </Bg>
  );
}

const Bg = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
  background-image: url("/image/bg-home.png");
`;

const Character = styled.div<CharacterPos>`
  position: absolute;
  left: ${(props) => `${props.$left}px`};
  top: ${(props) => `${props.$top}px`};
`;
