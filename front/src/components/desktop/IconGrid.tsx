import React, { Dispatch, SetStateAction, useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";
import { ICONS_FILE } from "@/constant/constant";
import useRemoverExtension from "../../hooks/useRemoverExtension";
import { useChangeIconBg } from "@/hooks/useChangeIconBg";
import useOpenWindow from "@/hooks/useOpenWindow";

export default function IconGrid() {
  // 클릭한 아이콘을 위한 훅
  const { changeBg, changeClick } = useChangeIconBg();

  // 불러온 파일명의 확장자를 삭제할 훅
  const removeExtension = useRemoverExtension();

  // loadFolder로 DATA와 DATA에 맞는 주소로 이동하는 훅
  const loadFolder = useOpenWindow(ICONS_FILE);

  return (
    <Container>
      <ItemBox>
        {/* 이미지 추가될 때마다 public/image 에서 png 가져오기 */}
        {Object.keys(ICONS_FILE).map((imageName, index) => (
          <Item
            key={index}
            onClick={() => changeClick(index)}
            onDoubleClick={() => loadFolder(imageName)}
          >
            {/* 클릭 시 blue bg 추가 */}
            {changeBg === index && <ClickChangeBg />}
            {/* 이미지 */}
            <Image
              src={require(`../../../public/image/${ICONS_FILE[imageName]}`)}
              alt={imageName}
              className="icon"
            />
            {/* 파일명 */}
            <FileName>
              {removeExtension(ICONS_FILE[imageName]).replaceAll(/-/g, ` `)}
            </FileName>
          </Item>
        ))}
      </ItemBox>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  display: flex;
  position: absolute;

  font-family: "Microsoft";
`;

const ItemBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

const FileName = styled.span`
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
