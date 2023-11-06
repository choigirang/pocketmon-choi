import React from "react";
import styled from "styled-components";
import Image from "next/image";
import window from "../../../public/image/windowsc64.png";

export default function Window() {
  return (
    <Container>
      <Image src={window} alt="" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
