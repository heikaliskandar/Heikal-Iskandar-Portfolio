// generate layour with footer
import Footer from "@/components/Footer";

export const metadata = {
    title: "Projects",
    description: "Explore my portfolio of web development projects including React applications, Next.js websites, and SEO-optimized solutions built by Muhammad Heikal Iskandar.",
    keywords: ["web development projects", "React projects", "Next.js portfolio", "Muhammad Heikal Iskandar projects"],
    openGraph: {
        title: "Projects - Muhammad Heikal Iskandar",
        description: "Portfolio of web development projects",
        url: "https://heikal-iskandar-portfolio.vercel.app/projects",
        images: [{
            url: "/image/website-heikal-iskandar.png",
            width: 1200,
            height: 630,
            alt: "Muhammad Heikal Iskandar Projects"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects - Muhammad Heikal Iskandar",
        description: "Portfolio of web development projects",
        images: ["/image/projects-og.jpg"]
    },
    alternates: {
        canonical: "https://heikal-iskandar-portfolio.vercel.app/projects"
    }
};

export default function ProjectsLayout({ children }) {
    return children;
}