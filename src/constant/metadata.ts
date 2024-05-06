import { Metadata } from "next";

interface MetadataProps {
  [key: string]: string;
}

export const META = {
  title: "window 95",
  siteName: "window 95",
  description: "since 2000",
  keyword: ["window95"],
  url: "https://pocketmon-choi.vercel.app/",
  googleVerification: process.env.GOOGLE || "",
  naverVerification: process.env.NAVER || "",
  ogImage: "/windows_logo.webp",
} as const;

export const getMetadata = (metadataProps?: MetadataProps) => {
  const { title, description, asPath } = metadataProps || {};

  const TITLE = title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? META.url + asPath : META.url;
  const OG_IMAGE = META.ogImage;

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keyword],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: "ko_KR",
      type: "website",
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },
    verification: {
      google: META.googleVerification,
      other: {
        "naver-site-verification": META.naverVerification,
      },
    },
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: OG_IMAGE,
      },
    },
  };

  return metadata;
};
