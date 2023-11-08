import React, { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import professor from "img/professor.png";

export default function PartOne() {
  const [showIcon, setShowIcon] = useState(false);

  setTimeout(() => {
    setShowIcon(!showIcon);
  }, 1500);

  return (
    <Container>
      <Image src={professor} alt="professor" className="professor"></Image>
      <TextBoxBorder>
        <TextBox />
        {showIcon && <MdArrowDropDown className="icon" />}
      </TextBoxBorder>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;

  .professor {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -20%);
    z-index: -1;
  }

  .icon {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
  }
`;

const TextBoxBorder = styled.div`
  width: 100%;
  height: 200px;
  border: solid 3px black;
  border-radius: 7px;
  padding: 5px;
  background-color: white;
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  border: solid 4px black;
  padding: 10px;
  position: relative;
  background-color: white;
`;
