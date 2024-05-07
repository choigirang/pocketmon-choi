"use client";

import { windowState } from "@/recoil/window/windowState";
import WindowFrame from "./windowFrame";
import { useRecoilValue } from "recoil";
import React from "react";

/* 2024/05/06 - 바탕화면(home/page)에서 보여줄 윈도우 프로그램 열기*/
export default function OpenWindow() {
  const lists = useRecoilValue(windowState);

  return (
    <React.Fragment>
      {lists.map((list) => {
        return (
          list.open && (
            <WindowFrame key={list.name} props={list}>
              {list.components}
            </WindowFrame>
          )
        );
      })}
    </React.Fragment>
  );
}
