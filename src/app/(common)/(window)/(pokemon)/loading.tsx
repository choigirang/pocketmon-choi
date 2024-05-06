"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

/* 2024/05/05 - loading bg, 3초뒤 nextStep => 다음 컴포넌트 전환(story) */
export default function Loading({ setStep }: { setStep: () => void }) {
  const [loading, setLoading] = useState(true);

  /* 배경화면 3초 후 다음 컴포넌트 넘기기*/
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setStep();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <React.Fragment>
      {loading && (
        <div className="w-full h-full relative">
          <Image src="/image/loading.png" fill alt="loading" sizes="100vw" />

          <span className="absolute z-100 top-[50px] left-1/2 -translate-x-1/2 text-[#ffcc01] text-2xl font-pokemon text-logo">
            Pokemon Choi
          </span>
        </div>
      )}
    </React.Fragment>
  );
}
