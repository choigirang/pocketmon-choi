import { atom } from "recoil";

export interface WindowItem {
  name: string;
  components: React.ReactNode;
  open: boolean;
}

/* 2024/05/06 - 추가할 윈도우 창 목록 */
export const windowState = atom<WindowItem[]>({
  key: "windowState",
  default: [],
});
