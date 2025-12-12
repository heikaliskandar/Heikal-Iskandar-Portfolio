import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar"; // Import Sidebar

config.autoAddCss = false;

export const metadata = {
    metadataBase: new URL("https://heikal-iskandar-portfolio.vercel.app"),
    title: {
        default: "Muhammad Heikal Iskandar - Front-End Engineer & SEO Specialist",
        template: "%s | Muhammad Heikal Iskandar"
    },
    description: "Muhammad Heikal Iskandar, 22 years old Front-End Engineer and SEO Specialist based in Kuala Lumpur, Malaysia. Specializing in React, Next.js, and modern web development.",
    keywords: ["Muhammad Heikal Iskandar", "Front-End Engineer", "SEO Specialist", "Web Developer", "React", "Next.js", "Kuala Lumpur", "Malaysia"],
    authors: [{ name: "Muhammad Heikal Iskandar", url: "https://heikal-iskandar-portfolio.vercel.app" }],
    creator: "Muhammad Heikal Iskandar",
    publisher: "Muhammad Heikal Iskandar",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Muhammad Heikal Iskandar - Front-End Engineer & SEO Specialist",
        description: "Front-End Engineer and SEO Specialist based in Kuala Lumpur",
        url: "https://heikal-iskandar-portfolio.vercel.app",
        siteName: "Muhammad Heikal Iskandar Portfolio",
        locale: "en_US",
        type: "website",
        images: [{
            url: "/image/heikal-iskandar.jpg",
            width: 1200,
            height: 630,
            alt: "Muhammad Heikal Iskandar Portfolio"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Muhammad Heikal Iskandar - Front-End Engineer & SEO Specialist",
        description: "Front-End Engineer and SEO Specialist based in Kuala Lumpur",
        creator: "@Heikaliskandar_",
        images: ["/image/heikal-iskandar.jpg"]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "googlec9b55987e7ae0140.html",

    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Structured Data - Person Schema */}
                <Script
                    id="person-schema"
                    type="application/ld+json"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Muhammad Heikal Iskandar",
                            url: "https://heikal-iskandar-portfolio.vercel.app",
                            image: "https://heikal-iskandar-portfolio.vercel.app/image/heikal-iskandar-2.jpg",
                            description: "Front-End Engineer and SEO Specialist",
                            jobTitle: ["Front-End Engineer", "SEO Specialist"],
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Kuala Lumpur",
                                addressCountry: "MY",
                            },
                            birthDate: "2003",
                            sameAs: [
                                "https://github.com/heikaliskandar",
                                "https://www.linkedin.com/in/heikal-iskandar/",
                                "https://www.instagram.com/heikaliskandar/",
                                "https://twitter.com/Heikaliskandar_",
                            ],
                            knowsAbout: ["Front-End Development", "SEO", "React", "Next.js", "JavaScript", "Web Performance"],
                        }),
                    }}
                />

                {/* Website Schema */}
                <Script
                    id="website-schema"
                    type="application/ld+json"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "Muhammad Heikal Iskandar Portfolio",
                            url: "https://heikal-iskandar-portfolio.vercel.app",
                            description: "Personal portfolio showcasing projects and skills in front-end development and SEO",
                            author: {
                                "@type": "Person",
                                name: "Muhammad Heikal Iskandar"
                            },
                            inLanguage: "en-US"
                        }),
                    }}
                />
            </head>
            <body className="antialiased">
                <Navbar />
                <Sidebar /> {/* Add Sidebar here */}
                {children}
                <Analytics />
            </body>
        </html>
    );
}