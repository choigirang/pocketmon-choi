import { KeyboardEvent } from "@/types/event";
import { TxtData } from "@/types/props";
import React, { useEffect, useState } from "react";

export default function useTyping({ txt }: { txt: TxtData }) {
  const [showTxt, setShowTxt] = useState(1);

  const [displayedTxt, setDisplayedTxt] = useState("");

  const [txtIdx, setTxtIdx] = useState(0);

  const [fade, setFade] = useState(true);

  // 키 초깃값 1로 고정을 고려한 data의 대사 갯수
  const lengthOfData = Object.keys(txt).length + 1;

  // 클릭 시 핸들러
  const handleClick = () => {
    if (showTxt === lengthOfData) return setFade(true);

    if (showTxt < lengthOfData) {
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

  // 키보드 핸들러
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter" || e.key === "ArrowDown") {
      // 불러올 대사 없을 시 fade
      if (showTxt === lengthOfData) return setFade(true);

      // 다음 대사 있을 시
      if (showTxt < lengthOfData) {
        if (txtIdx < txt[showTxt].length) {
          setDisplayedTxt(txt[showTxt]);
          setTxtIdx(txt[showTxt].length);
        } else {
          setShowTxt(showTxt + 1);
          setDisplayedTxt("");
          setTxtIdx(0);
        }
      }
    }
  };

  useEffect(() => {});

  return <div>useTyping</div>;
}
