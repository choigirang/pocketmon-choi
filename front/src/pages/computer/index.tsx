import { useRouter } from "next/router";
import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Menu from "@/components/folder/Menu";
// import computer from "@/My-Computer.png";

export default function MyComputer() {
  const router = useRouter();

  return (
    <Container>
      <Folder>
        <Image src="/image/My-Computer.png" alt="lgoo" width={24} height={24} />
        <span>My Computer</span>
      </Folder>
      <Menu />
      <List></List>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  border: solid 5px #c0c0c0;
`;

const Folder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  background-color: #808080;
  color: white;
  border-bottom: solid 5px #c0c0c0;
`;

const List = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgb(71, 71, 71) 4px 4px inset, rgba(237, 237, 238) -4px -4px inset;
`;
