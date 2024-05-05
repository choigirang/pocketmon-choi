import { IconData } from "@/constant/constant";
import Image from "next/image";
import IconImg from "./iconImg";

export default function Home() {
  return (
    <main className="w-full h-full p-3 grid grid-cols-wallpaper grid-rows-wallpaper gap-3">
      <ul>
        {Object.keys(IconData).map((data) => (
          <IconImg
            key={data}
            name={data}
            url={`/image/${data}.webp`}
            components={IconData[data].components}
            menu={false}
          />
        ))}
      </ul>
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
