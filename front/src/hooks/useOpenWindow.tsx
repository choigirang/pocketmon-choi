import { IconNames } from "@/constant/constant";
import React, { useState } from "react";

export default function useOpenWindow(DATA: IconNames) {
  const openWindow = (imgName: string) => {
    const width = 800;
    const height = 600;
    window.open(`/${imgName}`, "", `width=${width},height=${height}`);
  };

  return openWindow;
}
