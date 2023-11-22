import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import PartTwoStory from "../../components/story/PartTwoStory";
import useMoveClass from "@/hooks/useMoveClass";

export default function data() {
  const focusRef = useRef<HTMLDivElement>(null);

  const { status, moveClass, character, handleKey } = useMoveClass();

  useEffect(() => {
    if (typeof window !== "undefined") {
      focusRef.current?.focus();
    }
  }, []);

  return (
    <Container onKeyDown={handleKey} ref={focusRef} tabIndex={0}>
      <PartTwoStory
        status={status}
        moveClass={moveClass}
        character={character}
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
