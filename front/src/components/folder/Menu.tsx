import { HoverItem } from "@/types/props";
import React, { useState } from "react";
import { styled } from "styled-components";

export default function Menu() {
  const [click, setClick] = useState<undefined | string>(undefined);
  const menu = ["File", "Edit", "View", "Help"];

  return (
    <MenuList onMouseLeave={() => setClick(undefined)}>
      {menu.map((item, idx) => (
        <MenuItem
          key={idx}
          isHoverd={click === item}
          onMouseOver={() => setClick(item)}
        >
          {item}
        </MenuItem>
      ))}
    </MenuList>
  );
}

const MenuList = styled.ul`
  width: 100%;
  padding: 5px 0;
  display: flex;
  background-color: #c0c0c0;
`;

const MenuItem = styled.li<HoverItem>`
  display: flex;
  min-width: 40px;
  padding: 2px 5px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.isHoverd && "#020182"};
  color: ${(props) => props.isHoverd && "white"};
`;
