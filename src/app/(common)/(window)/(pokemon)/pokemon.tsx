import Story from "./story";

/* 2024/05/04 - 윈도우에 열릴 포켓몬 프로그램 */
export default function Pokemon() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black relative shadow-common">
      <Story />
    </div>
  );
}
