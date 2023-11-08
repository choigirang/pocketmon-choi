import React, { SetStateAction, useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";
import pixel_logo from "img/window_pixel.svg";
import { BtmOpenProps } from "@/types/props";
import NavMenu from "./NavMenu";

export default function BtmNav({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Container>
      {menuOpen && <NavMenu />}
      <Btn open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <Image src={pixel_logo} alt="" className="pixel-logo" width={30} />
        <span>Start</span>
      </Btn>
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;
  height: 40px;
  padding: 5px;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #bac3bf;
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
    props.open
      ? "rgb(71, 71, 71) 3px 3px inset, rgba(237, 237, 238) -3px -3px inset"
      : "rgb(237, 237, 238) 3px 3px inset, rgba(71, 71, 71) -3px -3px inset"};
  font-family: "Microsoft";
  font-weight: 500;
  cursor: pointer;
`;
