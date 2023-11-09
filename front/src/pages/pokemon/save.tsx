import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import mainImg from "img/main.png";
import Image from "next/image";
import { MdArrowRight } from "react-icons/md";
import { KeyboardEvent } from "@/types/event";
import { useRouter } from "next/router";
import { lightAni } from "@/styles/animation";

export default function save() {
  const router = useRouter();
  // div 키보드 이벤트를 위한 ref
  const focusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    focusRef.current!.focus();
  }, []);

  function selectDataHandler(e: KeyboardEvent) {
    if (e.key === "Enter") router.push("/pokemon/data");
  }

  return (
    <Container ref={focusRef} onKeyDown={selectDataHandler}>
      <Image src={mainImg} alt="main-charactor" className="charactor" />
      {/* 데이터 선택 */}
      <SelectBoxBorder>
        <SelectBox>
          <MdArrowRight className="icon" />
          <DataName>최기랑</DataName>
        </SelectBox>
      </SelectBoxBorder>
      {/* 하단 텍스트 */}
      <TextBoxBorder>
        <TextBox>저장된 데이터를 불러옵니다.</TextBox>
      </TextBoxBorder>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  font-family: "Galmuri14", sans-serif;
  font-size: 50px;

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
      right: 20px;
    }
  }

  @media (max-width: 767px) {
    /* 모바일 */
    .charactor {
      right: 20px;
    }
  }
`;

// 데이터 선택
const SelectBoxBorder = styled.div`
  width: 300px;
  border: solid 3px black;
  border-radius: 7px;
  padding: 5px;
  background-color: white;

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
  background-color: white;
  display: flex;

  .icon {
    width: 50px;
    height: 50px;
    animation: ${lightAni} 1s infinite;
  }
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
