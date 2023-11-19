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
  left: number;
  top: number;
};

// story/character/ItemOpen
export type PosProps = {
  pos: string;
};
