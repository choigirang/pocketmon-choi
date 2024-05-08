"use client";

import { useEffect, useState } from "react";
import { ClockIcon } from "@heroicons/react/16/solid";

/** 2024/05/04 - 시간 */
export default function Timer() {
  const [timer, setTimer] = useState("00:00");

  useEffect(() => {
    currentTimer();

    const timerInterval = setInterval(currentTimer, 60000);

    return () => clearInterval(timerInterval);
  }, []);

  function currentTimer() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    setTimer(`${hour}:${min}`);
  }

  return (
    <div className="flex items-center gap-[5px] px-[10px] shadow-timer bg-gray">
      <ClockIcon color="black" width={16} height={16} />
      <span>{timer}</span>
    </div>
  );
}
