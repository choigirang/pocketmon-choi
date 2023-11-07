import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../../public/image/Windows_Logo.svg";
import BtmNav from "./bottom/BtmNav";
import IconGrid from "./IconGrid";
import dynamic from "next/dynamic";

function folder(clickedItem: string | undefined) {
  if (!clickedItem) return null;
  const FolderComponent = dynamic(() => import(`../folder/${clickedItem}`), {
    loading: () => <div>Loading...</div>, // 로딩 중에 보일 컴포넌트
    ssr: false, // 서버사이드 렌더링 비활성화
  });
  return <FolderComponent />;
}

export default function WindowWallPaper() {
  const [renderComponent, setRenderComponent] = useState<JSX.Element | null>(
    null
  );

  // 클릭한 요소 배경 변경
  const [changeBg, setChangeBg] = useState<undefined | number>(undefined);

  // handle click icon
  const [clickedItem, setClickedItem] = useState<undefined | string>(undefined);

  // handle menu barw
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setRenderComponent(folder(clickedItem));
  }, [clickedItem]);

  return (
    <Container>
      {/* 폴더 */}
      {renderComponent}
      {/* 아이콘 모음 */}
      <IconGrid
        setClickedItem={setClickedItem}
        changeBg={changeBg}
        setChangeBg={setChangeBg}
      />
      {/* 하단바 */}
      <BtmNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* 배경 */}
      <Bg
        onClick={() => {
          setChangeBg(undefined);
          setClickedItem(undefined);
        }}
      >
        <Image src={logo} alt="bg-logo" className="logo" />
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

  @media (min-width: 1200px) {
    /* 데스크톱 */
    .logo {
      max-width: 500px;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    /* 태블릿*/
    .logo {
      max-width: 400px;
    }
  }

  @media (max-width: 767px) {
    /* 모바일 */
    .logo {
      max-width: 300px;
    }
  }
`;
