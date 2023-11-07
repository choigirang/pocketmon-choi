import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { styled } from "styled-components";
import WindowWallPaper from "@/components/desktop/WindowWallPaper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <WindowWallPaper></WindowWallPaper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
