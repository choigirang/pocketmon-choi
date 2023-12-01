import React from "react";

import { styled } from "styled-components";

/** 폴더 열릴 시 상단 네비 */
export default function HoverMenu() {
  const menu = ["(empty)", "(empty)", "(empty)", "(empty)", "(empty)"];

  return (
    <Container>
      {menu.map((item, idx) => (
        <List key={idx}>{item}</List>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  /* box-shadow를 위한 padding px */
  padding: 3px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 20px;
  z-index: 1;
  box-shadow: rgb(237, 237, 238) 3px 3px inset, rgba(71, 71, 71) -3px -3px inset;
`;

const List = styled.li`
  padding: 10px 7px;
  background-color: #c0c0c0;
  font-size: 14px;
  color: black;

  &:hover {
    cursor: pointer;
    background-color: #020182;
    color: white;
  }
`;
