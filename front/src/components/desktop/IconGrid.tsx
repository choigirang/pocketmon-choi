import React from "react";
import { styled } from "styled-components";
import Image from "next/image";

const imageNames = ["computer.png"];

export default function IconGrid() {
  function removeExtension(fileName: string) {
    return fileName.split(".").slice(0, -1).join(".");
  }

  return (
    <Container>
      <ItemBox>
        {imageNames.map((imageName, index) => (
          <Item key={index}>
            <Image
              src={require(`../../../public/image/${imageName}`)}
              alt={imageName}
              className="icon"
            />
            <span>{removeExtension(imageName)}</span>
          </Item>
        ))}
      </ItemBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  position: absolute;

  font-family: "Microsoft";
`;

const ItemBox = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;

  .icon {
    width: 50px;
    height: auto;
  }
`;
