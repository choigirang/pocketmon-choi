import React, { useCallback, useEffect, useRef, useState } from "react";
import { keyframes, styled } from "styled-components";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import professor from "img/professor.png";
import { useRouter } from "next/router";
import { Fade } from "@/types/props";
import { KeyboardEvent } from "@/types/event";
import { lightAni, nameAni } from "@/styles/animation";
import { PART_ONE_DATA } from "@/constant/constant";

export default function PartOne() {
  // text 불러올 상태값
  const [showText, setShowText] = useState(1);
  // 입력되며 보여질 string 저장값
  const [displayedText, setDisplayedText] = useState("");
  // str의 idx
  const [textIndex, setTextIndex] = useState(0);
  // 컴포넌트 종료와 함께 fade-out 효과
  const [fade, setFade] = useState(true);

  // 저장된 text 끝났을 시 router 이동
  const router = useRouter();
  // div 요소에 focus
  const refForKey = useRef<HTMLDivElement>(null);

  // str의 idx만큼 displayedText를 계속 추가
  useEffect(() => {
    if (textIndex < PART_ONE_DATA[showText].length) {
      const timer = setTimeout(() => {
        setDisplayedText(
          (prevText) => prevText + PART_ONE_DATA[showText][textIndex]
        );
        setTextIndex((prevIndex) => prevIndex + 1);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [showText, textIndex]);

  // opacity 효과가 끝나고 router 이동
  useEffect(() => {
    // 초깃값으로 바로 이동하지 않도록
    if (fade) return;
    setTimeout(() => {
      router.push("/pokemon/save");
    }, 2000);
  }, [fade]);

  // Container focus
  useEffect(() => {
    refForKey.current!.focus();
  }, []);

  // 클릭했을 때의 이벤트
  function handleShowTextWithClick() {
    if (showText === 7) return setFade(!fade);

    if (showText < 7) {
      if (textIndex < PART_ONE_DATA[showText].length) {
        // 타이핑 중이면 모든 텍스트
        setDisplayedText(PART_ONE_DATA[showText]);
        setTextIndex(PART_ONE_DATA[showText].length);
      } else {
        setShowText(showText + 1);
        setDisplayedText(""); // 이벤트 핸들러가 동작해서 showText가 증가하면 초기화
        setTextIndex(0);
      }
    }
  }

  // 키보드 이벤트 핸들러
  function handleShowTextWithKeyboard(e: KeyboardEvent) {
    if (e.key === " " || e.key === "Enter" || e.key === "ArrowDown") {
      if (showText === 7) return setFade(!fade);

      if (showText < 7) {
        if (textIndex < PART_ONE_DATA[showText].length) {
          // 타이핑 중이면 모든 텍스트
          setDisplayedText(PART_ONE_DATA[showText]);
          setTextIndex(PART_ONE_DATA[showText].length);
        } else {
          setShowText(showText + 1);
          setDisplayedText(""); // 이벤트 핸들러가 동작해서 showText가 증가하면 초기화
          setTextIndex(0);
        }
      } else {
        router.push("/pokemon/save");
      }
    }
  }

  return (
    <Container
      $fade={fade}
      onKeyDown={handleShowTextWithKeyboard}
      onClick={handleShowTextWithClick}
      tabIndex={0}
      ref={refForKey}
    >
      <Image src={professor} alt="professor" className="professor"></Image>
      {/* 하단 텍스트 */}
      <TextBoxBorder>
        <TextBox>
          {showText === 7 ? (
            <>
              <Name className="name">Mr.Choi</Name> {displayedText}
            </>
          ) : (
            displayedText
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
  opacity: ${(prosp) => (prosp.$fade ? 1 : 0)};

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
