import React, { Dispatch, SetStateAction, useState } from "react";

export function useChangeIconBg() {
  const [changeBg, setChangeBg] = useState<undefined | number>(undefined);
  const [clicked, setClicked] = useState(false);

  const changeClick = (index: number) => {
    if (!clicked) {
      if (changeBg === index) return setChangeBg(undefined);
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 500);
      setChangeBg(index);
    }
  };

  return { changeBg, changeClick };
}
