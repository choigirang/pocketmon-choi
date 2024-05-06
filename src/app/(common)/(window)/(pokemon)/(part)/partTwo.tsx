import Image from "next/image";
import Trainer from "./trainer";

/* 2024/05/05 - 캐릭터 이동 main part */
export default function PartTwo() {
  return (
    <div className="relative w-full h-full">
      <Image src="/image/bg-home.webp" alt="bg-img" fill />
      <Trainer />
    </div>
  );
}
