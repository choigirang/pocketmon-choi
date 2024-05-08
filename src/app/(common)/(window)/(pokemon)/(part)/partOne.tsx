"use client";

import { PART_ONE_DATA } from "@/constant/constant";
import useTyping from "@/hooks/useTyping";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useEffect } from "react";

/* 2024/05/05 - loading 끝난 후 보여질 애니메이션 (story)*/
export default function PartOne({ setStep }: { setStep: () => void }) {
  const { showTxt, displayedTxt, handleBoard, fade } = useTyping({
    txt: PART_ONE_DATA,
  });

  /* 다음 대사 없을 시 페이지 전환을 위한 setStep */
  useEffect(() => {
    if (fade) setStep();
  }, [fade]);

  return (
    <div className="relative w-full h-full flex justify-center items-center bg-white">
      <Image
        src="/image/pokemon/professor.webp"
        alt="charater"
        width={100}
        height={150}
        style={{ width: "auto", height: "auto" }}
      />
      {/* 대사창 */}
      <div
        className="absolute w-full h-1/3 left-0 bottom-0 flex flex-col justify-end border-2 border-solid border-black p-[5px] bg-white transition-custom"
        onClick={handleBoard}
        tabIndex={0}
      >
        <div className="w-full h-full border-2 border-solid border-black p-[5px] rounded bg-white">
          {/* 마지막 대사 시 이름 추가 */}
          {showTxt === Object.keys(PART_ONE_DATA).length ? (
            <>
              <span className="name">최기랑</span> {displayedTxt}
            </>
          ) : (
            displayedTxt
          )}
          <ChevronDoubleDownIcon
            width={16}
            height={16}
            className="absolute right-5 bottom-5"
          />
        </div>
      </div>
    </div>
  );
}
