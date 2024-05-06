"use client";

import { WindowItem, windowState } from "@/recoil/window/atom";
import { useRecoilState } from "recoil";

const handleButton = ["_", "x"];

export default function Buttons(props: WindowItem) {
  const [isWindow, setIsWindow] = useRecoilState(windowState);

  /* atom의 윈도우 목록에서 창 닫기 */
  const handleCloseButtonClick = (func: string) => {
    if (func === "_") {
      setIsWindow((prev) =>
        prev.map((item) =>
          item.name === props.name ? { ...item, open: false } : item
        )
      );
    }
    if (func === "x")
      setIsWindow((prev) => prev.filter((item) => item.name !== props.name));
  };

  return (
    <div className="flex gap-1">
      {handleButton.map((func) => (
        <button
          key={func}
          type="button"
          className="w-[15px] h-full text-sm bg-gray text-zinc-800 shadow-common"
          onClick={() => handleCloseButtonClick(func)}
        >
          {func}
        </button>
      ))}
    </div>
  );
}
