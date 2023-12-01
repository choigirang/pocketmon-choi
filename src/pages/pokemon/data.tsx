import React, { useEffect, useRef } from "react";

import PartTwoStory from "../../components/story/PartTwoStory";
import useHandleDataPage from "@/hooks/useHandleDataPage";
import { BACK_PACK } from "@/constant/constant";

import { styled } from "styled-components";

/** 포켓몬 게임 페이지 */
export default function data() {
  // div keyDown 부여를 위한 요소 지정
  const focusRef = useRef<HTMLDivElement>(null);

  // 이동한 캐릭터 움직임 훅
  const { selectNum, status, moveClass, character, handleKey, handleArrow } =
    useHandleDataPage();

  useEffect(() => {
    if (typeof window !== "undefined") {
      focusRef.current?.focus();
    }
  }, []);

  return (
    <Container
      onKeyDown={(e) => {
        handleKey(e);
        status.ITEM && handleArrow(BACK_PACK, e);
      }}
      ref={focusRef}
      tabIndex={0}
    >
      <PartTwoStory
        status={status}
        moveClass={moveClass}
        character={character}
        selectNum={selectNum}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b1b1b;
  position: relative;
`;
