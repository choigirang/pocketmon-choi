import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import PartTwoStory from "../../components/story/PartTwoStory";
import useHandleDataPage from "@/hooks/useHandleDataPage";
import { BACK_PACK } from "@/constant/constant";

export default function data() {
  const focusRef = useRef<HTMLDivElement>(null);

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
