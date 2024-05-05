"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Loading({ setStep }: { setStep: () => void }) {
  const [loading, setLoading] = useState(true);

  // 초기 배경 setTime
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
