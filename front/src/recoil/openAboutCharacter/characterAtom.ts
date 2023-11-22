import { atom, selector } from "recoil";

export const CharacterAtom = atom({
  key: "CharacterAtom",
  default: {
    ITEM: false,
    STATUS: false,
  },
});

export const AboutCharacter = selector({
  key: "AboutCharacterSelector",
  get: ({ get }) => {
    const character = get(CharacterAtom);
    return character;
  },
});
