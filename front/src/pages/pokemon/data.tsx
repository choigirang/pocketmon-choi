import React, { useEffect } from "react";
import { styled } from "styled-components";
import PartTwoStory from "../../components/story/PartTwoStory";
import { useRecoilState } from "recoil";
import { CharacterAtom } from "@/recoil/openAboutCharacter/characterAtom";
import ItemOpen from "@/components/story/character/ItemOpen";
import StatusOpen from "@/components/story/character/\bStatusOpen";

export default function data() {
  const [status, setStatus] = useRecoilState(CharacterAtom);

  useEffect(() => {
    const handleKeyboardWindow = (e: KeyboardEvent) => {
      const key = e.key;
      switch (key) {
        case "i":
          setStatus({ ...status, ITEM: !status.ITEM });
          console.log(status);
          break;
        case "s":
          setStatus({ ...status, STATUS: !status.STATUS });
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyboardWindow);

    // 컴포넌트 언마운트 시 이벤트 리스너를 정리합니다.
    return () => {
      document.removeEventListener("keydown", handleKeyboardWindow);
    };
  }, []);

  useEffect(() => {
    console.log(status.ITEM);
  }, [status.ITEM]);

  console.log(status.ITEM);

  return (
    <Container>
      {status.ITEM && <ItemOpen />}
      {status.STATUS && <StatusOpen />}
      <PartTwoStory />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b1b1b;
`;
