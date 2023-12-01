import { atom, selector } from "recoil";

// 네비 오픈 확인값
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
