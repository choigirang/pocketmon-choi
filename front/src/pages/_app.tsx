import type { AppProps } from "next/app";
import "@/styles/index.css";
import "@/styles/common.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
