import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { styled } from "styled-components";
import WindowWallPaper from "@/components/desktop/WindowWallPaper";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>포켓몬최 키우기</title>
        <meta name="description" content="포켓몬 골드"></meta>
      </Head>
      <Container>
        <WindowWallPaper></WindowWallPaper>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
