import { atom, selector } from "recoil";

export const MenuAtom = atom({
  key: "NavAtom",
  default: false,
});

export const navState = selector({
  key: "navState",
  get: ({ get }) => {
    const nav = get(MenuAtom);
    return nav;
  },
});
