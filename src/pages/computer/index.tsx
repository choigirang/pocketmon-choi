import React, { useState } from "react";
import Image from "next/image";

import Menu from "@/components/folder/Menu";

import { styled } from "styled-components";

/** My-computer 아이콘 클릭 시 열릴 페이지 */
export default function MyComputer() {
  const [hoverItem, setHoverItem] = useState<undefined | string>(undefined);
  const [, setClickItem] = useState<undefined | string>(undefined);

  return (
    <Container>
      <Folder>
        <Image src="/image/My-Computer.png" alt="lgoo" width={24} height={24} />
        <span>My Computer</span>
      </Folder>
      {/* /folder의 메뉴 list */}
      <Menu
        hoverItem={hoverItem}
        setHoverItem={setHoverItem}
        setClickItem={setClickItem}
      />
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
  box-shadow: var(--box-shadow-black);
`;
