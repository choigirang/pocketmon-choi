/**
 * 파일 확장명 지우기 훅
 * @param {string} fileName 확장자명을 포함한 아이콘
 */
export default function useRemoverExtension(): (fileName: string) => string {
  const removeExtension = (fileName: string) => {
    return fileName.split(".").slice(0, -1).join(".");
  };

  return removeExtension;
}
