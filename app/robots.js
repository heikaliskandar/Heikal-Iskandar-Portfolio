export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/_next/"],
        },
        sitemap: "https://heikal-iskandar-portfolio.vercel.app/sitemap.xml",
    };
}