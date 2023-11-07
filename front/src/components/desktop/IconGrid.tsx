import React, { Dispatch, SetStateAction, useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";

const imageNames = ["My-Computer.png"];

export default function IconGrid({
  changeBg,
  setClickedItem,
  setChangeBg,
}: {
  changeBg: undefined | number;
  setClickedItem: Dispatch<SetStateAction<undefined | string>>;
  setChangeBg: Dispatch<SetStateAction<undefined | number>>;
}) {
  // 클릭과 더블 클릭 구분을 위한
  const [clicked, setClicked] = useState(false);

  // 확장자 지우기
  function removeExtension(fileName: string) {
    return fileName.split(".").slice(0, -1).join(".");
  }

  // 클릭한 요소에 따른 bg 부여
  function changeClick(index: number) {
    if (!clicked) {
      if (changeBg === index) return setChangeBg(undefined);
      setClicked(true);
      setTimeout(() => {
        // 지정한 시간(예: 300ms) 후 클릭 상태를 초기화
        setClicked(false);
      }, 300);
      setChangeBg(index);
    }
  }

  // 더블 클릭한 요소를 WindowWallPaper에서 folder로 띄우기
  function loadFolder(imgName: string) {
    setClicked(false);
    setClickedItem(removeExtension(imgName).replaceAll(/-/g, ``));
    const width = 800; // 새 창의 가로 크기
    const height = 600; // 새 창의 세로 크기
    window.open("/computer", "", `width=${width},height=${height}`);
  }

  return (
    <Container>
      <ItemBox>
        {imageNames.map((imageName, index) => (
          <Item
            key={index}
            onClick={() => changeClick(index)}
            onDoubleClick={() => loadFolder(imageName)}
          >
            {/* 클릭 시 blue bg 추가 */}
            {changeBg === index && <ClickChangeBg />}
            <Image
              src={require(`../../../public/image/${imageName}`)}
              alt={imageName}
              className="icon"
            />
            <NameTag>
              {removeExtension(imageName).replaceAll(/-/g, ` `)}
            </NameTag>
          </Item>
        ))}
      </ItemBox>
    </Container>
  );
}

const Container = styled.div`
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
  padding: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  cursor: pointer;

  .icon {
    width: 50px;
    height: auto;
  }
`;

const NameTag = styled.span`
  color: white;
  z-index: 1;
`;

const ClickChangeBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(38, 42, 245, 0.5);
  border: dashed 1px white;
`;
