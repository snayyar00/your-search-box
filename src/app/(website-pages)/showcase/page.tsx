import { sanityFetch } from "@/sanity/lib/fetch";
import {
  postsQuery,
  showcaseQuery,
  showcasesQuery,
} from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
// import Posts from "./components/Posts";
// import Menu from "./components/Menu";
// import Header from "./components/Header";
// import Showcase from "./components/ShowcasePosts";
import ShowcasePosts from "./components/ShowcasePosts";
import { Metadata } from "next";

export const revalidate = 60;


export const metadata: Metadata = {
  title: "Discover the Latest Showcase Posts | My Website",
  description:
    "Explore our latest showcase posts to find valuable insights, updates, and featured content from our community. Stay informed and inspired with just a click.",
  openGraph: {
    title: "Discover the Latest Showcase Posts | My Website",
    description:
      "Stay up-to-date with the latest showcase posts. Explore valuable insights and engaging content from top creators on our platform.",
    url: "https://your-website.com/showcase",
    images: [
      {
        url: "https://your-website.com/og-image-showcase.png",
        width: 1200,
        height: 627,
        alt: "Latest Showcase Posts on My Website",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "My Website",
  },
  metadataBase: new URL("https://your-website.com"),
  twitter: {
    card: "summary_large_image",
    site: "@yourwebsite", // Add your Twitter handle
    creator: "@yourwebsite", // Add creator's Twitter handle if available
    title: "Discover the Latest Showcase Posts | My Website",
    description:
      "Explore the latest showcase posts from top creators. Find insights and updates from our vibrant community in one place.",
    images: [
      {
        url: "https://your-website.com/og-image-showcase.png",
        width: 1200,
        height: 627,
        alt: "Latest Showcase Posts on My Website",
      },
    ],
  },
};



export default async function Home() {
  const showcasePosts = await sanityFetch<SanityDocument[]>({
    query: showcasesQuery,
  });

  return (
    <main className="max-w-7xl min-h-screen mx-auto px-4">
      {/* <Header /> */}
      {/* <Menu /> */}
      <ShowcasePosts posts={showcasePosts} />
    </main>
  );
}
