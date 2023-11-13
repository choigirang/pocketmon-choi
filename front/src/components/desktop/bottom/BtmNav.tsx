import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";
import pixel_logo from "img/window_pixel.svg";
import { BtmOpenProps } from "@/types/props";
import NavMenu from "./NavMenu";
import clock from "img/clock.svg";
import { useRecoilState } from "recoil";
import { MenuAtom } from "@/recoil/menuBtn/menuAtom";
import useClickOutside from "@/hooks/useClickOutside";

export default function BtmNav() {
  // 시간 설정 Clock
  const [timer, setTimer] = useState("00:00");
  // menu open
  const [menuOpen, setMenuOpen] = useRecoilState(MenuAtom);

  const btnRef = useRef<HTMLDivElement>(null);

  // useEffect 없이 함수만으로 setInterval
  // 지정했으나 too many rerender err
  useEffect(() => {
    // 초기 타이머 설정
    currentTimer();

    // 1분마다 타이머 업데이트
    const timerInterval = setInterval(currentTimer, 60000);

    // 컴포넌트가 언마운트되면 타이머 클리어
    return () => clearInterval(timerInterval);
  }, []);

  useClickOutside(btnRef, () => setMenuOpen(false));

  // 현재 시각 타이머
  function currentTimer() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    setTimer(`${hour}:${min}`);
  }

  return (
    <Container>
      {menuOpen && <NavMenu />}
      <Btn $open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} ref={btnRef}>
        <Image src={pixel_logo} alt="" className="pixel-logo" width={30} />
        <span>Start</span>
      </Btn>
      <Clock>
        <Image src={clock} alt="clock-img" width={16} />
        <div className="timer">{timer}</div>
      </Clock>
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  height: 40px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--base-gray);
  box-shadow: rgb(237, 237, 238) 3px 3px inset,
    rgba(255, 255, 255, 0.5) -3px -3px inset;
`;

const Btn = styled.div<BtmOpenProps>`
  height: 100%;
  padding: 0 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #bfbfbf;
  box-shadow: ${(props) =>
    props.$open ? "var(--box-shadow-black)" : "var(--box-shadow-white)"};
  font-family: "Microsoft";
  font-weight: 500;
  cursor: pointer;
`;

const Clock = styled.div`
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #bfbfbf;
  box-shadow: var(--box-shadow-black);
  font-family: "Microsoft";

  .timer {
    height: 16px;
    display: flex;
    align-items: center;
    padding-top: 2px;
  }
`;
