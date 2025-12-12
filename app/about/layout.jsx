import Footer from "@/components/Footer";

export const metadata = {
  title: "About Muhammad Heikal Iskandar | Front-End Engineer & SEO Specialist",
  description:
    "Learn about Muhammad Heikal Iskandar, a 22-year-old Front-End Engineer and SEO Specialist from Kuala Lumpur. Discover my skills, experience, and passion for web development.",
  keywords: [
    "Muhammad Heikal Iskandar",
    "Front-End Engineer",
    "SEO Specialist",
    "Kuala Lumpur",
    "Web Developer",
    "Malaysia",
  ],
  authors: [{ name: "Muhammad Heikal Iskandar" }],
  openGraph: {
    title: "About Muhammad Heikal Iskandar",
    description: "Front-End Engineer & SEO Specialist based in Kuala Lumpur",
    url: "https://heikal-iskandar-portfolio.vercel.app/about",
    type: "profile",
    images: [
      {
        url: "/image/heikal-iskandar-2.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Heikal Iskandar - Front-End Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Muhammad Heikal Iskandar",
    description: "Front-End Engineer & SEO Specialist",
    creator: "@Heikaliskandar_",
    images: ["/image/heikal-iskandar-2.jpg"],
  },
  alternates: {
    canonical: "https://heikal-iskandar-portfolio.vercel.app/about",
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
