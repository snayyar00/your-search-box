import { SanityDocument } from "@sanity/client";
import {
  postPathsQuery,
  postQuery,
  showcasePathsQuery,
  showcaseQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
// import Post from "../components/Post";
import ShowCasePost from "../components/ShowcasePost";
import { Metadata } from "next";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(showcasePathsQuery);
  return posts;
}
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: showcaseQuery,
    params,
  });
  return {
    title: `Your Search Box ${post?.baselink}`,
    description: post?.questions || "",
    openGraph: {
      locale: "en_US",
      type: "article",
      title: `Your Search Box ${post?.baselink}`,
      description: post?.questions || "",
      siteName: "Your Search Box",

      images: [
        {
          url: "https://your-search-box.vercel.app/og-image.png",
          width: 1200,
          height: 627,
          alt: "Your search box - Effective AI Search.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}
const PostPage = async ({ params }: { params: any }) => {
  const post = await sanityFetch<SanityDocument>({
    query: showcaseQuery,
    params,
  });
  return <ShowCasePost post={post} />;
};

export default PostPage;
