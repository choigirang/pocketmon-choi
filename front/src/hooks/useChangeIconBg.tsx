import { useState } from "react";

/**
 * 선택한 아이콘에 배경 효과를 주기 위한 커스텀훅
 */
export function useChangeIconBg() {
  // 변경될 icon의 숫자에 따른 값
  const [changeBg, setChangeBg] = useState<undefined | number>(undefined);
  // 클릭 여부
  const [clicked, setClicked] = useState(false);

  // 아이콘 클릭 핸들러
  const changeClick = (index: number | undefined) => {
    if (!clicked) {
      if (changeBg === index || index === undefined)
        return setChangeBg(undefined);
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 500);
      setChangeBg(index);
    }
  };

  return { changeBg, changeClick };
}
