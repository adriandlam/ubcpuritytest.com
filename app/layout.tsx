import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "UBC Purity Test",
  description: "UBC students, hsow innocent are you?",
  openGraph: {
    title: "UBC Purity Test",
    description: "How innocent are you? Take the UBC Purity Test to find out!",
    images: [
      {
        url: "/og.png", // Path relative to the public directory
        width: 1200,
        height: 630,
        alt: "UBC Purity Test",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UBC Purity Test",
    description: "How innocent are you? Take the UBC Purity Test to find out!",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="0bfe87b1-8a99-4ec0-a23d-23a4256ffa56"
      />
      <body className="antialiased">{children}</body>
    </html>
  );
}
