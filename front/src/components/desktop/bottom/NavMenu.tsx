import React from "react";
import { styled } from "styled-components";

export default function NavMenu() {
  return <Container></Container>;
}

const Container = styled.ul`
  background-color: white;
  position: absolute;
  bottom: 60px;
  box-shadow: rgb(237, 237, 238) 3px 3px inset, rgba(71, 71, 71) -3px -3px inset;
`;
