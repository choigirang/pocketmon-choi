import Image from "next/image";
import OpenWindow from "../(common)/(window)/(frame)/openWindow";
import { IconData } from "@/constant/constant";
import IconImg from "./iconImg";
import Computer from "../(common)/(window)/(computer)/computer";

/* 2024/05/06 - 바탕화면의 아이콘 목록과 화면에서 띄울 윈도우 목록(OpenWindow) */
export default function Home() {
  return (
    <main className="relative w-full h-full p-3">
      <ul className="grid grid-cols-wallpaper grid-rows-wallpaper gap-3">
        {Object.keys(IconData).map((data) => (
          <IconImg
            key={data}
            name={data}
            components={IconData[data].components}
            menu={false}
          />
        ))}
        {/* 컴퓨터 안에 컴퓨터 호출 초기화 문제로 별도 추가 (computer 컴포넌트)*/}
        <IconImg
          key={"computer"}
          name={"computer"}
          components={Computer()}
          menu={false}
        />
      </ul>

      {/* 열릴 창 목록 */}
      <OpenWindow />

      {/* 로고 */}
      <Image
        src="/image/windows_logo.webp"
        alt="logo"
        width={500}
        height={300}
        priority
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-[1]"
        style={{ width: "auto", height: "auto" }}
      />
    </main>
  );
}
