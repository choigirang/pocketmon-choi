import React from "react";
import { styled } from "styled-components";
import PartTwoStory from "../../components/story/PartTwoStory";

export default function data() {
  return (
    <Container>
      <PartTwoStory />
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
`;
