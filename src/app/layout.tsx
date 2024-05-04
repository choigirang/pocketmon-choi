import { Metadata } from "next";
import "../style/global.css";
import "../style/reset.css";
import Nav from "./(common)/(nav)/nav";

const meta: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className="bg-[#008080]">
        {children}
        <Nav />
      </body>
    </html>
  );
}
