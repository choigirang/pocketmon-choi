"use client";

import React from "react";
import { RecoilRoot } from "recoil";

/* 2024/05/06 - Recoil Root */
export default function Recoil({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
