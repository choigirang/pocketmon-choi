import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../../public/image/Windows_Logo.svg";
import BtmNav from "./bottom/BtmNav";
import IconGrid from "./IconGrid";
import { useRecoilState } from "recoil";
import { MenuAtom } from "@/recoil/menuBtn/menuAtom";

export default function WindowWallPaper() {
  return (
    <Container>
      {/* 폴더 */}
      {/* {renderComponent} */}
      {/* 아이콘 모음 */}
      <IconGrid />
      {/* 하단바 */}
      <BtmNav />
      {/* 배경 */}
      <Bg>
        <Image src={logo} alt="bg-logo" className="logo" priority />
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

  .logo {
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    .logo {
      max-width: 500px;
      height: auto;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    /* 태블릿*/
    .logo {
      max-width: 400px;
      height: auto;
    }
  }

  @media (max-width: 767px) {
    /* 모바일 */
    .logo {
      max-width: 300px;
      height: auto;
    }
  }
`;
