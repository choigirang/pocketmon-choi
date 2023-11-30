import { useEffect } from "react";

/** 선택한 아이콘의 배경 변경 효과 해제를 위한 외부 클릭 훅 */
function useClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void
) {
  //  외부 클릭 시 선택한 아이콘 해제
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        callback();
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useClickOutside;
