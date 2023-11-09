import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import professor from "img/professor.png";
import { useRouter } from "next/router";

interface KeyboardEvent {
  key: string;
}

const text: Record<number, string> = {
  1: "어질어질한 개발자 세계에 잘 왔단다 !",
  2: "나는 지칠 대로 지쳐버린 시니어 오박사...",
  3: "이 세계에는 스택이라고 불리는",
  4: "다양한 포켓몬이 존재한단다.",
  5: "포켓몬을 습득하는 것은 매우 어려운 길이지...",
  6: "우리는 이제 막 트레이너가 된",
  7: " 를 만나러 가보자꾸나",
};

export default function PartOne() {
  // text 불러올 상태값
  const [showText, setShowText] = useState(1);
  // 입력되며 보여질 string 저장값
  const [displayedText, setDisplayedText] = useState("");
  // str의 idx
  const [textIndex, setTextIndex] = useState(0);

  // 저장된 text 끝났을 시 router 이동
  const router = useRouter();

  // 클릭했을 때의 이벤트
  function handleShowTextWithClick() {
    if (showText < 7) {
      if (textIndex < text[showText].length) {
        // 타이핑 중이면 모든 텍스트
        setDisplayedText(text[showText]);
        setTextIndex(text[showText].length);
      } else {
        setShowText(showText + 1);
        setDisplayedText(""); // 이벤트 핸들러가 동작해서 showText가 증가하면 초기화
        setTextIndex(0);
      }
    } else {
      router.push("/pokemon/save");
    }
  }

  // 키보드 이벤트 핸들러
  function handleShowTextWithKeyboard(e: KeyboardEvent) {
    if (e.key === " " || e.key === "Enter" || e.key === "ArrowDown") {
      if (showText < 7) {
        if (textIndex < text[showText].length) {
          // 타이핑 중이면 모든 텍스트
          setDisplayedText(text[showText]);
          setTextIndex(text[showText].length);
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

  // 키보드 이벤트 리스너
  document.addEventListener("keydown", handleShowTextWithKeyboard, true);

  // str의 idx만큼 displayedText를 계속 추가
  useEffect(() => {
    if (textIndex < text[showText].length) {
      const timer = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[showText][textIndex]);
        setTextIndex((prevIndex) => prevIndex + 1);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [showText, textIndex]);

  return (
    <Container>
      <Image src={professor} alt="professor" className="professor"></Image>
      <TextBoxBorder onClick={handleShowTextWithClick}>
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

// 이름 그라데이션 애니메이션
const nameAni = keyframes`
  0% {
    background-position-y: 0%;
  }50%{
    background-position-y: 50%;
  }
  100% {
    background-position-y: 0%;
  }
`;

// 하단 화살표 깜빡임 애니메이션
const lightAni = keyframes`
  0%{
    visibility: hidden;
    opacity: 1;
  }50%{
    visibility: visible;
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  font-family: "Galmuri14", sans-serif;
  font-size: 50px;

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
