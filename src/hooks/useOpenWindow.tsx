/** 클릭한 아이콘에 해당하는 페이지 생성을 위한 훅 */
export default function useOpenWindow() {
  const openWindow = (imgName: string) => {
    const width = 800;
    const height = 600;
    window.open(`/${imgName}`, "", `width=${width},height=${height}`);
  };

  return openWindow;
}
