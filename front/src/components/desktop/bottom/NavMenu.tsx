import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FlexibleScale, HoverItem } from "@/types/props";

import useOpenWindow from "@/hooks/useOpenWindow";
import { ICONS_FILE } from "@/constant/constant";

import { css, styled } from "styled-components";

/** 메뉴를 클릭했을 때 열릴 목록 */
export default function NavMenu() {
  // Container width
  const [navWidth, setNavWidth] = useState(0);
  // Container height
  const [navHeight, setNavHeight] = useState(0);
  // hover
  const [hovered, setHovered] = useState("");

  // 리스트 높이값을 위한 ref
  const navRef = useRef<HTMLUListElement>(null);

  // windowOpen
  const openWindow = useOpenWindow(ICONS_FILE);

  // position bottom 값을 위한
  useEffect(() => {
    if (navRef.current) {
      setNavWidth(navRef.current.clientWidth);
      setNavHeight(navRef.current.clientHeight);
    }
  }, [navRef.current]);

  // 파일명 조합
  function FirstStrUpper(txt: string) {
    return txt[0].toUpperCase() + txt.slice(1);
  }

  return (
    <Container
      ref={navRef}
      $navWidth={navWidth}
      $navHeight={navHeight}
      onMouseLeave={() => setHovered("")}
    >
      {/* 로고 */}
      <LeftWindow>Windows 95</LeftWindow>
      <LiEl>
        <UlEl>
          {/* 아이콘 목록 */}
          {Object.keys(ICONS_FILE).map((imageName, idx) => (
            <Item
              key={idx}
              $hovered={hovered === imageName}
              onMouseOver={() => setHovered(imageName)}
              onClick={() => openWindow(imageName)}
            >
              <Image
                src={require(`../../../../public/image/${ICONS_FILE[imageName]}`)}
                alt="icon-img"
              />
              <FileName>{FirstStrUpper(imageName)}</FileName>
            </Item>
          ))}
        </UlEl>
      </LiEl>
      {/* box-shadow z-index를 위한 */}
      <BoxShadow $navWidth={navWidth} $navHeight={navHeight} />
    </Container>
  );
}

const Container = styled.ul<FlexibleScale>`
  display: grid;
  grid-template-columns: 30px auto;
  position: absolute;
  margin-bottom: 20px;
  font-family: "Microsoft";
  cursor: pointer;
  background-color: var(--base-gray);
  ${(props) =>
    props.$navHeight &&
    css`
      top: -${props.$navHeight}px;
    `}
`;

// 로고
const LeftWindow = styled.li`
  writing-mode: vertical-lr;
  background-color: #7f8279;
  padding: 10px 0 10px;
  transform: rotate(180deg);
  font-size: 21px;
  font-weight: bold;
  color: white;
`;

// 목록
const Item = styled.li<HoverItem>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  padding-right: 30px;
  background-color: ${(props) => props.$hovered && "#010081"};
  color: ${(props) => props.$hovered && "white"};
`;

const FileName = styled.span`
  &::first-letter {
    text-decoration: underline;
  }
`;

// hover 시
const BoxShadow = styled.li<FlexibleScale>`
  width: ${(props) => props.$navWidth && props.$navWidth}px;
  height: ${(props) => props.$navHeight && props.$navHeight}px;
  position: absolute;
  z-index: 1;
  box-shadow: rgb(237, 237, 238) 3px 3px inset, rgba(71, 71, 71) -3px -3px inset;
`;

// 컨텐츠 정렬을 위해 div를 사용할까 하다가
// li와 ul을 사용하기 위해서 trash El을 씀

// BoxShadow에 의한 hover 가려짐
const LiEl = styled.li`
  position: relative;
  z-index: 2;
`;
const UlEl = styled.ul``;
