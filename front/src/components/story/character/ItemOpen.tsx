import React, {
  KeyboardEvent,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { styled } from "styled-components";
import useDrag from "../../../hooks/useDrag";
import { PosProps } from "@/types/props";
import { useRecoilValue } from "recoil";
import { CharacterAtom } from "@/recoil/openAboutCharacter/characterAtom";
import { BACK_PACK } from "@/constant/constant";
import { MdArrowRight } from "react-icons/md";

export default function ItemOpen({
  parentRef,
}: {
  parentRef: React.RefObject<HTMLDivElement>;
}) {
  const [selectArrow, setSelectArrow] = useState(0);
  const status = useRecoilValue(CharacterAtom);

  const liRef = useRef<HTMLLIElement>(null);
  const { containerRef, movePos, dragStart } = useDrag(parentRef);

  const handleArrow = (e: KeyboardEvent) => {
    console.log(1);
    if (
      Object.keys(BACK_PACK).length < selectArrow ||
      Object.keys(BACK_PACK).length > selectArrow
    ) {
      switch (e.key) {
        case "ArrowDown":
          setSelectArrow((prev) => prev++);
          break;
        case "ArrowUp":
          setSelectArrow((prev) => prev--);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    containerRef.current?.hidden;
  }, [status]);

  return (
    <Container
      ref={containerRef}
      onMouseDown={dragStart}
      $pos={movePos}
      $status={status}
      onKeyDown={handleArrow}
    >
      <BackPack>
        {Object.keys(BACK_PACK).map((skill, idx) => (
          <li key={idx} ref={liRef}>
            {selectArrow === idx && <MdArrowRight className="icon" />}
            {skill}
          </li>
        ))}
      </BackPack>
    </Container>
  );
}

const Container = styled.div<PosProps>`
  position: absolute;
  width: 300px;
  height: 400px;
  padding: 5px;
  border: solid 4px black;
  border-radius: 10px;
  background-color: white;
  left: ${(props) => props.$pos.left + "px"};
  top: ${(props) => props.$pos.top + "px"};
  transform: ${(props) => !props.$status.ITEM && "scale(0)"};
  transition: all 0.1s;
`;

const BackPack = styled.ul`
  width: 100%;
  height: 100%;
  padding: 5px;
  border: solid 4px black;
  border-radius: 10px;
  background-color: white;
`;
