import { atom, selector } from "recoil";

export const NavAtom = atom({
  key: "NavAtom",
  default: false,
});

export const NavState = selector({
  key: "NavState",
  get: ({ get }) => {
    const nav = get(NavAtom);
    return nav;
  },
});
