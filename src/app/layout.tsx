import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import RectangularLogo from "@/assets/rectangular-logo.png";
import Header from "./components/Header";
import Script from 'next/script';

const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Your Search Box - Make your website's search bar smarter",
  description:
    "Improve user conversion on your e-commerce store, find answers from your blogs & website content all with a simple click",
  openGraph: {
    images: [
      {
        url: "https://your-search-box.vercel.app/og-image.png",
        width: 1200,
        height: 627,
        alt: "Your search box - Effective AI Search.",
      },
    ],
  },
  metadataBase: {
    host: "https://your-search-box.vercel.app",
    href: "/",
    origin: "https://your-search-box.vercel.app",
    password: "your-search-box",
    hash: "your-search-box",
    pathname: "/",
    search: "",
    username: "your-search-box",
    hostname: "your-search-box.vercel.app",
    port: "",
    protocol: "https:",
    searchParams: new URLSearchParams(""),
    toString: () => "https://your-search-box.vercel.app/",
    toJSON: () => "https://your-search-box.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://your-search-box.vercel.app",
    creator: "https://your-search-box.vercel.app",
    title: "Your Search Box - Make your website's search bar smarter",
    description:
      "Improve user conversion on your e-commerce store, find answers from your blogs & website content all with a simple click",
    images: [
      {
        url: "https://your-search-box.vercel.app/og-image.png",
        width: 1200,
        height: 627,
        alt: "Your Search Box - Make your website's search bar smarter",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth font-">
      <body className={cn(lato.className, "antialiased bg-[#14093E]")}>
        <Header />
        {children}
        <Script
          id="yoursearchbox-script"
          strategy="afterInteractive"
        >
          {`
            const script = document.createElement('script');
            script.src = "https://ysb-widget.b-cdn.net/searchbox-widget.umd.js?botId=670e398267ad7a6f897e017c&variant=button";
            script.async = true;
            document.body.appendChild(script);
          `}
        </Script>
      </body>
    </html>
  );
}
