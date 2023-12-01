import React, { useEffect, useState } from "react";

import PockemonBg from "@/components/folder/PockemonBg";
import PartOneTutorial from "@/components/story/PartOneTutorial";

import { styled } from "styled-components";

/** 포켓몬 초기 로딩화면 */
export default function Pockemon() {
  // 배경 제어 상태값
  const [showPockemonBg, setShowPockemonBg] = useState(true);

  // 초기 배경 setTime
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPockemonBg(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      {/* 초기 로딩 화면 종료 후 시작 튜토리얼 교체 */}
      {showPockemonBg && <PockemonBg />}
      {!showPockemonBg && <PartOneTutorial />}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
