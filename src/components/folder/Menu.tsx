import React, { Dispatch, SetStateAction } from "react";

import HoverMenu from "./HoverMenu";
import { HoverItem } from "@/types/props";

import { styled } from "styled-components";

/**
 * computer/index 에서 사용
 * @param {undefined|string} hoverItem  마우스가 올라가있을 떄 지정될 메뉴명
 * @param {Dispatch<SetStateAction<undefined | string>>} setHoverItem 마우스가 올라가 있는 메뉴명 지정
 * @param {Dispatch<SetStateAction<undefined | string>>} setClickItem 마우스를 클릭한 메뉴명*/
export default function Menu({
  hoverItem,
  setHoverItem,
  setClickItem,
}: {
  hoverItem: undefined | string;
  setHoverItem: Dispatch<SetStateAction<undefined | string>>;
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
        <React.Fragment key={idx}>
          {/* 메뉴 */}
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
