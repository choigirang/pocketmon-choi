import { RefObject } from "react";

// useTyping
export type TxtData = {
  [key: string | number]: string;
};

// bottom/BtmNav props
export type BtmOpenProps = {
  $open: boolean;
};

// bottom/NavMenu props
export type FlexibleScale = {
  $navWidth: number;
  $navHeight: number;
};

// IconGrid Item props
export type ClickIndexProps = {
  $isSelected: boolean;
};

// Folder Menu & bottom/NavMenu props
export type HoverItem = {
  $hovered: boolean;
};

// Folder PockemonBg props (Common fade effect)
export type Fade = {
  $fade: boolean;
};

// story/PartTwoStory
export type CharacterPos = {
  $left: number;
  $top: number;
};

// story/PartTwoStory/ItemOpen
export type ItemOpenProps = {
  parentRef: React.RefObject<HTMLDivElement>;
  selectNum: number;
  $status: CharacterAtomType;
};

// story/character/ItemOpen
export type PosProps = {
  $pos: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  $status: CharacterAtomType;
};

interface CharacterAtomType {
  ITEM: boolean;
  STATUS: boolean;
}

// pages/pokemon/data
export type dataPageProps = {
  status: CharacterAtomType;
  selectNum: number;
  moveClass: string;
  character: { x: number; y: number };
};
