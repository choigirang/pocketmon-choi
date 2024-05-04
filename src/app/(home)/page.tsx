import { IconData } from "@/constant/constant";
import Image from "next/image";
import IconContainer from "./IconContainer";

export default function Home() {
  return (
    <div className="w-full h-full p-3">
      <IconContainer />
      <Image
        src="/image/windows_logo.webp"
        alt="logo"
        width={500}
        height={300}
        priority
        className="h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-[1]"
      />
    </div>
  );
}
