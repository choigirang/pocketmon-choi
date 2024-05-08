"use client";

import { iconList } from "@/recoil/icon/iconList";
import React from "react";
import { useRecoilValue } from "recoil";
import IconImg from "./iconImg";

interface Directory {
  menu?: boolean;
  folder?: boolean;
}

export default function UserFiles({ menu, folder }: Directory) {
  const lists = useRecoilValue(iconList);

  return (
    <React.Fragment>
      {Object.keys(lists).map((list) => (
        <IconImg
          menu={menu}
          folder={folder}
          key={list}
          name={list}
          components={lists[list].components}
        />
      ))}
    </React.Fragment>
  );
}
