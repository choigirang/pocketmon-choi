import React from "react";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";

import useTyping from "@/hooks/useTyping";
import { Fade } from "@/types/props";
import { PART_ONE_DATA } from "@/constant/constant";

import { styled } from "styled-components";
import { lightAni, nameAni } from "@/styles/animation";
import professor from "img/professor.png";

/** pokemon/data 에서 사용도리 컴포넌트 */
export default function PartOneTutorial() {
  // 타이핑 효과를 위한 커스텀 훅(키보드 or 마우스 클릭 시 타이핑 효과)
  const { showTxt, displayedTxt, handleClick, handleKeyBoard, fade, ref } =
    useTyping({ txt: PART_ONE_DATA, url: "/pokemon/save" });

  return (
    <Container
      $fade={fade}
      onKeyDown={handleKeyBoard}
      onClick={handleClick}
      tabIndex={0}
      ref={ref}
    >
      <Image src={professor} alt="professor" className="professor"></Image>
      {/* 하단 텍스트 */}
      <TextBoxBorder>
        <TextBox>
          {/* 마지막 대사 시 이름 추가 */}
          {showTxt === Object.keys(PART_ONE_DATA).length ? (
            <>
              <Name className="name">최기랑</Name> {displayedTxt}
            </>
          ) : (
            displayedTxt
          )}
        </TextBox>
        <MdArrowDropDown className="icon" />
      </TextBoxBorder>
    </Container>
  );
}

const Container = styled.div<Fade>`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  font-family: "Galmuri14", sans-serif;
  font-size: 50px;
  transition: all 2s;
  opacity: ${(prosp) => (prosp.$fade ? 0 : 1)};

  @media (min-width: 768px) and (max-width: 1200px) {
    /* 태블릿*/
    font-size: 40px;
  }

  @media (max-width: 767px) {
    /* 모바일 */
    font-size: 30px;
  }

  .professor {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -20%);
    z-index: -1;
  }

  .icon {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    animation: ${lightAni} 2s infinite;
  }
`;

// 하단 텍스트
const TextBoxBorder = styled.div`
  width: 100%;
  height: 200px;
  border: solid 3px black;
  border-radius: 7px;
  padding: 5px;
  background-color: white;
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  border: solid 4px black;
  padding: 10px;
  position: relative;
  background-color: white;
`;

// 7번째 PART_ONE_DATA에서 추가될 Name tag
const Name = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    180deg,
    #ffb6ff,
    #b344ff 10%,
    #ae38ff 33%,
    #ffb6ff 45%,
    #ffe3ff 50%,
    #ffb6ff 66%,
    #b344ff
  );
  background-size: 100% 300%;
  background-position-y: 0%;
  animation: ${nameAni} 2s ease-in-out infinite;
`;
