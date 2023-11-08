import { BgShow } from "@/types/props";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function PockemonBg() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container show={show}>
      <Logo>
        <span className="text">Pockemon</span>
        <span className="text small">CHOI</span>
      </Logo>
    </Container>
  );
}

const Container = styled.div<BgShow>`
  width: 100%;
  height: 100%;
  background-image: url("/image/loading-pockemon.png");
  background-size: cover;
  background-position: center;
  position: relative;
  opacity: ${(props) => (props.show ? 1 : 0)};
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
