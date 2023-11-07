import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../../public/image/Windows_Logo.svg";
import BtmNav from "./BtmNav";
import IconGrid from "./IconGrid";

export default function WindowWallPaper() {
  return (
    <Container>
      <IconGrid />
      <BtmNav />
      <Bg>
        <Image src={logo} alt="bg-logo" className="logo" />
      </Bg>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #008080;
  position: relative;
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    /* 데스크톱 */
    .logo {
      max-width: 500px;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    /* 태블릿*/
    .logo {
      max-width: 400px;
    }
  }

  @media (max-width: 767px) {
    /* 모바일 */
    .logo {
      max-width: 300px;
    }
  }
`;
