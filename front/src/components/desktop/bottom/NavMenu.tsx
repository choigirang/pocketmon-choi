import { ICONS_FILE } from "@/constant/constant";
import { HoverItem, UlHeight } from "@/types/props";
import Image from "next/image";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { css, styled } from "styled-components";

export default function NavMenu() {
  // Container 높이값
  const [navHeight, setNavHeight] = useState(0);
  // hover
  const [hovered, setHovered] = useState("");

  // 리스트 높이값을 위한 ref
  const navRef = useRef<HTMLUListElement>(null);

  // position bottom 값을 위한
  useEffect(() => {
    if (navRef.current) {
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
      navHeight={navHeight}
      onMouseLeave={() => setHovered("")}
    >
      {Object.keys(ICONS_FILE).map((imageName, idx) => (
        <Item
          key={idx}
          hovered={hovered === imageName}
          onMouseOver={() => setHovered(imageName)}
        >
          <Image
            src={require(`../../../../public/image/${ICONS_FILE[imageName]}`)}
            alt="icon-img"
          />
          <FileName>{FirstStrUpper(imageName)}</FileName>
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.div<UlHeight>`
  display: grid;
  grid-template-rows: 30px auto;
  position: absolute;
  margin-bottom: 20px;
  font-family: "Microsoft";
  cursor: pointer;
  background-color: var(--base-gray);
  ${(props) =>
    props.navHeight &&
    css`
      top: -${props.navHeight}px;
    `}
  box-shadow: rgb(237, 237, 238) 3px 3px inset, rgba(71, 71, 71) -3px -3px inset;
`;

const Item = styled.li<HoverItem>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  background-color: ${(props) => props.hovered && "#010081"};
`;

const FileName = styled.span`
  &::first-letter {
    text-decoration: underline;
  }
`;
