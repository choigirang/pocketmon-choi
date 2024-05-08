import { useEffect, useState } from "react";

import { KeyboardEvent } from "@/types/event";
import { TxtData } from "@/types/props";

/**
 * pokemon/index && save에서 사용될 대사에 해당하는 타이핑 효과
 * @param {[key:string]:string} txt 대사
 * @param {string} 마지막 타이핑 후 이동될 주소값
 */
export default function useTyping({ txt }: { txt: TxtData }) {
  // data의 대사로 사용될 순서
  const [showTxt, setShowTxt] = useState(1);

  // 보여질 data의 대사
  const [displayedTxt, setDisplayedTxt] = useState("");

  // 대사 순서의 str index
  const [txtIdx, setTxtIdx] = useState(0);

  // lightAni 효과를 위한
  const [fade, setFade] = useState(false);

  // 키보드 핸들러
  const handleBoard = () => {
    // 불러올 대사 없을 시 fade
    if (showTxt === Object.keys(txt).length) return setFade(true);

    // 다음 대사 있을 시
    if (showTxt < Object.keys(txt).length) {
      if (txtIdx < txt[showTxt].length) {
        setDisplayedTxt(txt[showTxt]);
        setTxtIdx(txt[showTxt].length);
      } else {
        setShowTxt(showTxt + 1);
        setDisplayedTxt("");
        setTxtIdx(0);
      }
    }
  };

  // str의 idx만큼 display 추가 타이핑
  useEffect(() => {
    if (txtIdx < txt[showTxt].length) {
      const timer = setTimeout(() => {
        setDisplayedTxt((prevTxt) => prevTxt + txt[showTxt][txtIdx]);
        setTxtIdx((prevIdx) => prevIdx + 1);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [showTxt, txtIdx, txt]);

  return { showTxt, displayedTxt, handleBoard, fade };
}
