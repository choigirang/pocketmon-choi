import { IconComponent } from "@/constant/constant";
import { AddIcon, iconList } from "@/recoil/icon/iconList";
import { useState } from "react";
import { useRecoilState } from "recoil";

const options = {};
const iconOpts = { open: {} };

export default function useMakeFiles() {
  // 메뉴 표시 여부와 위치를 상태로 저장
  const [showMenu, setShowMenu] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  // 폴더 or 파일 저장
  const [lists, setLists] = useRecoilState(iconList);

  // 마우스 우클릭 핸들러
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // 기본 컨텍스트 메뉴 비활성화
    setShowMenu(true); // 메뉴를 보여주도록 설정
    setPos({
      // 메뉴 위치 설정
      x: e.pageX,
      y: e.pageY,
    });
  };

  // 다른 곳 클릭 시 메뉴 숨기기
  const handleClick = () => {
    setShowMenu(false);
  };

  const makeFiles = (file: AddIcon) => {
    setLists((prev) => ({
      ...prev,
      [file.name]: file,
    }));
  };

  return { pos, showMenu, handleClick, handleContextMenu, makeFiles };
}
