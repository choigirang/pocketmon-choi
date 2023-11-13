import { useEffect, useRef } from "react";

function useClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        callback();
      }
    };

    // 이벤트 리스너를 등록합니다.
    document.addEventListener("click", handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 리스너를 정리합니다.
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useClickOutside;
