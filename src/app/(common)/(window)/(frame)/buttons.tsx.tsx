"use client";

import useWindowAtom from "@/hooks/useWindowAtom";
import { WindowItem } from "@/recoil/window/windowState";

const handleButton = ["_", "x"];

export default function Buttons(props: WindowItem) {
  const { handleOnOff } = useWindowAtom(props);
  return (
    <div className="flex gap-1">
      {handleButton.map((func) => (
        <button
          key={func}
          type="button"
          className="flex justify-center w-[15px] h-[15px] bg-gray text-zinc-800 shadow-btn text-center text-xs font-bold"
          onClick={() => handleOnOff(func)}
        >
          {func}
        </button>
      ))}
    </div>
  );
}
