import PockemonBg from "@/components/folder/PockemonBg";
import PartOne from "@/components/story/PartOneTutorial";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

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
      {showPockemonBg && <PockemonBg />}
      {!showPockemonBg && <PartOne />}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
