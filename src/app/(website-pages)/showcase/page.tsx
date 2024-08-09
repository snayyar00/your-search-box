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

export const revalidate = 60;

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
