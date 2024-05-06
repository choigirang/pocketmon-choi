import "../style/global.css";
import "../style/reset.css";
import Nav from "./(common)/(nav)/nav";
import Recoil from "@/recoil/recoil";

import { getMetadata } from "@/constant/metadata";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata();
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className="relative flex flex-col justify-between bg-[#008080]">
        <Recoil>
          {children}
          <Nav />
        </Recoil>
      </body>
    </html>
  );
}
