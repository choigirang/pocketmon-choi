import { atom, selector } from "recoil";

export const CharacterAtom = atom({
  key: "CharacterAtom",
  default: {
    ITEM: true,
    STATUS: false,
  },
});

export const AboutCharacter = selector({
  key: "AboutCharacter",
  get: ({ get }) => {
    const character = get(CharacterAtom);
    return character;
  },
});
