import React from "react";

export default function useRemoverExtension(): (fileName: string) => string {
  const removeExtension = (fileName: string) => {
    return fileName.split(".").slice(0, -1).join(".");
  };

  return removeExtension;
}
