import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const myFont = localFont({ src: "./fonts/Inter.ttf" });

export const metadata: Metadata = {
	title: "Quentin Stubecki's Portfolio",
	description:
		"My personal portfolio showcasing my projects, skills, and experiences.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<main className={myFont.className}>
					{children}
					<Analytics />
					<SpeedInsights />
				</main>
			</body>
		</html>
	);
}
