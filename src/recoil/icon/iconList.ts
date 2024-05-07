import { IconComponent } from "@/constant/constant";
import { atom } from "recoil";

export interface AddIcon extends IconComponent {
  id: number;
}

export const iconList = atom<{ [key: string]: AddIcon }>({
  key: "iconList",
  default: {},
});
