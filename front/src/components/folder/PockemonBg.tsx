import { Fade } from "@/types/props";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

/** pokemon/index 에서 사용할 배경화면 */
export default function PockemonBg() {
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false);
    }, 4000);

    // 컴포넌트 언마운트 시 오류 방지를 위한
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container $fade={fade}>
      <Logo>
        <span className="text">Pockemon</span>
        <span className="text small">CHOI</span>
      </Logo>
    </Container>
  );
}

const Container = styled.div<Fade>`
  width: 100%;
  height: 100%;
  background-image: url("/image/loading-pockemon.png");
  background-size: cover;
  background-position: center;
  position: relative;
  opacity: ${(props) => (props.$fade ? 1 : 0)};
  transition: opacity 0.5s;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -20%);
  font-family: "Pockemon-logo";
  font-size: 100px;
  color: #ffcc01;
  text-shadow: -10px 0 #1a498d, 0 10px #1a498d, 10px 0 #1a498d, 0 -10px #1a498d;

  .small {
    font-size: 60px;
  }
`;
