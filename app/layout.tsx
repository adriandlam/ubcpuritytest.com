import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
	title: "UBC Purity Test",
	description: "How innocent are you?",
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
