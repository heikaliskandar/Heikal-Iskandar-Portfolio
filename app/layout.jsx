import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
  title: 'Muhammad Heikal Iskandar - Front-End Engineer & SEO Specialist',
  description: 'Muhammad Heikal Iskandar, 22 years old Front-End Engineer and SEO Specialist based in Kuala Lumpur',
  openGraph: {
    title: 'Muhammad Heikal Iskandar - Front-End Engineer & SEO Specialist',
    description: 'Front-End Engineer and SEO Specialist based in Kuala Lumpur',
    url: 'https://heikal-iskandar-portfolio.vercel.app/',
    siteName: 'Muhammad Heikal Iskandar Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Heikal Iskandar",
              "url": "https://yourwebsite.com",
              "image": "https://yourwebsite.com/image/me.jpg",
              "description": "Front-End Engineer and SEO Specialist",
              "jobTitle": ["Front-End Engineer", "SEO Specialist"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kuala Lumpur",
                "addressCountry": "MY"
              },
              "birthDate": "2003",
              "sameAs": [
                "https://github.com/heikaliskandar",
                "https://www.linkedin.com/in/heikal-iskandar/",
                "https://www.instagram.com/heikaliskandar/",
                "https://twitter.com/Heikaliskandar_"
              ]
            })
          }}
        />
      </head>
      <body>
        <ClientTopProgressBar />
        <Navbar />
        <Sidebar /> {/* Add this line */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}