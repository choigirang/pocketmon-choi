import Image from "next/image";
import Trainer from "./trainer";

export default function PartTwo() {
  return (
    <div className="relative w-full h-full">
      <Image src="/image/bg-home.webp" alt="bg-img" fill />
      <Trainer />
    </div>
  );
}
