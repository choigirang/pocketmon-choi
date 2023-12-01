import { atom, selector } from "recoil";

// pokemon/save 페이지에서 열릴 아이템창 & 스텟창
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
