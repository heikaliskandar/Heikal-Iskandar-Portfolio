import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add other meta tags here, but leave out og:image if you don't want a preview image */}
      </head>
      <body>
        <ClientTopProgressBar />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}


