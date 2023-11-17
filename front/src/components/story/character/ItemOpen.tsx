import React from "react";
import { styled } from "styled-components";

export default function ItemOpen() {
  return <Container>ItemOpen</Container>;
}

const Container = styled.div`
  position: absolute;
  width: 200px;
  height: 300px;
  z-index: 2;
  background-color: white;
`;
