"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  // 초기 배경 setTime
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <React.Fragment>
      {loading && (
        <Image
          src="/image/loading.png"
          fill
          objectFit="cover"
          alt="loading"
          sizes="100vw"
        />
      )}
    </React.Fragment>
  );
}
