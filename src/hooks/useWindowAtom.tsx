import { WindowItem, windowState } from "@/recoil/window/windowState";
import { useRecoilState } from "recoil";

export default function useWindowAtom(props?: WindowItem) {
  const [isWindow, setIsWindow] = useRecoilState(windowState);

  /* 윈도우 창에서 창 여닫기, button click*/
  const handleOnOff = (func: string) => {
    if (props)
      if (func === "_" || func === "Open") {
        setIsWindow((prev) =>
          prev.map((item) =>
            item.name === props.name ? { ...item, open: !item } : item
          )
        );
      } else if (func === "x" || func === "Exit")
        setIsWindow((prev) => prev.filter((item) => item.name !== props.name));
  };

  /** 하단 메뉴에서 창 여닫기, 클릭 시 on/off */
  const handleMenuWindow = (list: string) => {
    setIsWindow((prev) =>
      prev.map((item) =>
        item.name === list ? { ...item, open: !item.open } : item
      )
    );
  };

  return { isWindow, setIsWindow, handleOnOff, handleMenuWindow };
}
