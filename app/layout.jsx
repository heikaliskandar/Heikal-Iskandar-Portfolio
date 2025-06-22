import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Heikal | Portfolio",

    description:
		"My name is Heikal, I'm a web developer and I'm passionate about it. I'm currently studying at Universiti Kuala Lumpur.",

    author: "Heikal",
    siteUrl: "https://www.heikal.my.id",
    applicationName: "Heikal",

    keywords: [
		"heikal",
		"heikal iskandar",
		"heikal portfolio",
		"heikal unkl",
	],

    openGraph: {
		type: "website",
		url: "https://www.heikal.my.id",
		title: "Heikal | Portfolio",
		site_name: "Heikal | Portfolio",
		description: "My name is Heikal, This is my portfolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Heikal Portfolio",
			},
		],
		site_name: "Heikal | Portfolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
