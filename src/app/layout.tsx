import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "WebTools Pro - Professional Web Development Tools",
	description:
		"Powerful web tools for professionals. Text rewriter, robots.txt fetcher, and more. Fast, reliable, and free.",
	keywords:
		"web tools, text rewriter, robots.txt, sitemap generator, web development, SEO tools, content optimization",
	authors: [{ name: "WebTools Pro" }],
	creator: "WebTools Pro",
	openGraph: {
		title: "WebTools Pro",
		description:
			"Powerful web tools for professionals. Text rewriter, robots.txt fetcher, and more. Fast, reliable, and free.",
		url: "https://webtoolspro.com",
		type: "website",
		locale: "en_US",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	appleWebApp: {
		title: "WebTools Pro",
		capable: true,
		statusBarStyle: "default",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				<meta name='application-name' content='WebTools Pro' />
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta
					name='msapplication-config'
					content='/favicon/browserconfig.xml'
				/>
				{/* add search console meta tag here */}
				<meta
					name='google-site-verification'
					content='YOUR_GOOGLE_SITE_VERIFICATION_CODE'
				/>
				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-XXXXXXXXXX');
					`,
					}}></script>

				{/* Google AdSense */}
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX'
					crossOrigin='anonymous'></script>
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
