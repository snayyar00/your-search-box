import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Posts from "./components/Posts";
import Menu from "./components/Menu";
import Header from "./components/Header";
import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog | Your Search Box - AI-Powered Search Solutions",
  description:
    "Explore our blog posts about AI search technologies and discover how you can improve your website traffic and user experience with AI-powered solutions.",
  openGraph: {
    title: "Blog | Your Search Box",
    description:
      "Read the latest insights and guides on AI search technologies to optimize your website's search functionality, improve user experience, and boost traffic.",
    url: "https://your-search-box.vercel.app/blog",
    images: [
      {
        url: "https://your-search-box.vercel.app/og-image-blog.png",
        width: 1200,
        height: 627,
        alt: "Your Search Box Blog",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Your Search Box",
  },
  metadataBase: new URL("https://your-search-box.vercel.app"),
  twitter: {
    card: "summary_large_image",
    site: "https://your-search-box.vercel.app",
    creator: "https://your-search-box.vercel.app",
    title: "Your Search Box Blog - Insights on AI Search Technology",
    description:
      "Stay updated with the latest trends and insights in AI-powered search solutions for websites. Improve your user experience and website traffic.",
    images: [
      {
        url: "https://your-search-box.vercel.app/og-image-blog.png",
        width: 1200,
        height: 627,
        alt: "Your Search Box Blog",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://your-search-box.vercel.app/blog",
  },
};

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  return (
    <main className="max-w-7xl min-h-screen mx-auto px-4">
      <Header />
      {/* <Menu /> */}
      <Posts posts={posts} />
    </main>
  );
}
