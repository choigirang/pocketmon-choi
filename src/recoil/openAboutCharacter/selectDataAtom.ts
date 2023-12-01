import { atom } from "recoil";

// pokemon/save/ItemOpen에서 선택한 아이템에 해당하는 데이터
export const SelectDataAtom = atom({
  key: "SelectDataAtom",
  default: "",
});
