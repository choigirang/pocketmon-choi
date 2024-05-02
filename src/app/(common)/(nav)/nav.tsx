import Menu from "./menu";
import Timer from "./timer";

export default function Nav() {
  return (
    <nav className="fixed bottom-0 left-0 flex justify-between w-full h-[40px] bg-gray shadow-nav p-1">
      <Menu />
      <Timer />
    </nav>
  );
}
