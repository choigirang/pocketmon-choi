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

// story/character/ItemOpen
export type PosProps = {
  $pos: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
};

// pages/pokemon/data
export type dataPageProps = {
  status: { ITEM: boolean; STATUS: boolean };
  moveClass: string;
  character: { x: number; y: number };
};
