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
          className="flex justify-center w-[15px] h-full text-sm bg-gray text-zinc-800 shadow-common px-2 py-1 text-center"
          onClick={() => handleOnOff(func)}
        >
          <span>{func}</span>
        </button>
      ))}
    </div>
  );
}
