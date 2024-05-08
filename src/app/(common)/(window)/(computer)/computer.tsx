import IconImg from "@/app/(home)/iconImg";
import { IconData } from "@/constant/constant";
import UserFiles from "@/app/(home)/userFiles";

/** 2024/05/06 - 컴퓨터 폴더 안에 아이콘 목록 */
export default function Computer() {
  return (
    <ul className="w-full h-full overflow-scroll p-3 grid grid-rows-4 grid-cols-7 bg-white shadow-inner">
      {Object.keys(IconData).map((data) => (
        <IconImg
          key={data}
          name={data}
          components={IconData[data].components}
          folder
        />
      ))}
      <UserFiles folder />
    </ul>
  );
}
