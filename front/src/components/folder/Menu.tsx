import { HoverItem } from "@/types/props";
import React, { Dispatch, SetStateAction, useState } from "react";
import { styled } from "styled-components";
import HoverMenu from "./HoverMenu";

export default function Menu({
  hoverItem,
  setHoverItem,
  clickItem,
  setClickItem,
}: {
  hoverItem: undefined | string;
  setHoverItem: Dispatch<SetStateAction<undefined | string>>;
  clickItem: undefined | string;
  setClickItem: Dispatch<SetStateAction<undefined | string>>;
}) {
  const menu = ["File", "Edit", "View", "Help"];

  return (
    <MenuList
      onMouseLeave={() => {
        setHoverItem(undefined);
      }}
    >
      {menu.map((item, idx) => (
        <React.Fragment>
          <MenuItem
            key={idx}
            $hovered={hoverItem === item}
            onMouseOver={() => setHoverItem(item)}
            onClick={() => setClickItem(item)}
          >
            {item}
            {/* hover 시 메뉴 */}
            {hoverItem === item && <HoverMenu />}
          </MenuItem>
        </React.Fragment>
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
  position: relative;
  padding: 2px 5px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.$hovered && "#020182"};
  color: ${(props) => props.$hovered && "white"};
`;
