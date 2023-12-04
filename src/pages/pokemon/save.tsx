import React from "react";
import Image from "next/image";
import { MdArrowRight } from "react-icons/md";

import useTyping from "@/hooks/useTyping";
import { SAVE_DATA } from "@/constant/constant";
import { Fade } from "@/types/props";

import { styled } from "styled-components";
import { lightAni } from "@/styles/animation";
import mainImg from "img/main.png";

/** 저장된 데이터 확인 페이지 */
export default function Save() {
  // 타이핑 효과 후 페이지 이동 훅
  const { ref, displayedTxt, fade, handleClick, handleKeyBoard } = useTyping({
    txt: SAVE_DATA,
    url: "/pokemon/data",
  });

  return (
    <Container
      ref={ref}
      onKeyDown={handleKeyBoard}
      onClick={handleClick}
      $fade={fade}
      tabIndex={0}
    >
      <Image src={mainImg} alt="main-charactor" className="charactor" />
      {/* 데이터 선택 */}
      <SelectBoxBorder>
        <DataTag>데이터</DataTag>
        <SelectBox>
          <MdArrowRight className="icon" />
          <DataName>최기랑</DataName>
        </SelectBox>
      </SelectBoxBorder>
      {/* 하단 텍스트 */}
      <TextBoxBorder>
        <TextBox>{displayedTxt}</TextBox>
      </TextBoxBorder>
    </Container>
  );
}

const Container = styled.div<Fade>`
  width: 100vw;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  font-family: "Galmuri14", sans-serif;
  font-size: 50px;
  gap: 20px;
  transition: all 2s;
  opacity: ${(prosp) => (prosp.$fade ? 0 : 1)};

  .charactor {
    width: 250px;
    height: auto;
    position: absolute;
    z-index: -1;
    right: 100px;
    top: 20px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    /* 태블릿*/
    .charactor {
      left: 50%;
    }
  }

  @media (max-width: 767px) {
    /* 모바일 */
    .charactor {
      left: 50%;
    }
  }
`;

// 데이터 선택
const SelectBoxBorder = styled.div`
  width: 300px;
  margin-top: 50px;
  border: solid 3px black;
  border-radius: 7px;
  padding: 5px;
  background-color: white;
  position: relative;

  @media (min-width: 800px) {
    height: 500px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    /* 태블릿*/
    display: flex;
  }

  @media (max-width: 767px) {
    /* 모바일 */
    display: flex;
  }
`;

const SelectBox = styled.div`
  width: 100%;
  height: 100%;
  border: solid 4px black;
  padding: 10px;
  padding-top: 50px;
  background-color: white;
  display: flex;

  .icon {
    width: 50px;
    height: 50px;
    animation: ${lightAni} 1s infinite;
  }
`;

// 데이터
const DataTag = styled.div`
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: absolute;
  left: 50%;
  top: -20px;
  transform: translateX(-50%);
`;

const DataName = styled.span`
  font-family: var(--font-9);
`;

// 하단 텍스트 박스
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
