import Timer from "./timer";
import MenuWithWindow from "./menuWithWindow";

/** 2024/05/04 - timer와 시작메뉴(열린 프로그램 목록) */
export default function Nav() {
  return (
    <nav className="flex justify-between w-full h-[40px] bg-gray shadow-nav p-1">
      <MenuWithWindow />
      <Timer />
    </nav>
  );
}
