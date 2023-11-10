import { KeyboardEvent } from "@/types/event";
import { TxtData } from "@/types/props";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export default function useTyping({ txt, url }: { txt: TxtData; url: string }) {
  // data의 대사로 사용될 순서
  const [showTxt, setShowTxt] = useState(1);

  // 보여질 data의 대사
  const [displayedTxt, setDisplayedTxt] = useState("");

  // 대사 순서의 str index
  const [txtIdx, setTxtIdx] = useState(0);

  // lightAni 효과를 위한
  const [fade, setFade] = useState(false);

  const router = useRouter();

  // div의 focus를 위한 ref
  const ref = useRef<HTMLDivElement>(null);

  // 클릭 시 핸들러
  const handleClick = () => {
    if (showTxt === Object.keys(txt).length) return setFade(true);

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

  // 키보드 핸들러
  const handleKeyBoard = (e: KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter" || e.key === "ArrowDown") {
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

  // fade 시 lightAni 효과 후 주소 이동
  useEffect(() => {
    if (!fade) return;
    setTimeout(() => {
      router.push(`${url}`);
    }, 2000);
  }, [fade]);

  // DivEl 에서 keybordEvent 사용을 위한 focus
  useEffect(() => {
    ref.current!.focus();
  }, []);

  return { showTxt, displayedTxt, handleClick, handleKeyBoard, fade, ref };
}
