import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import Post from "../components/Post";
import { Metadata } from "next";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params,
  });

  return {
    title: `${post?.title} | Your Search Box`,
    description:
      post?.description ||
      "Read the latest insights on AI search technology to improve your website traffic and user engagement.",
    openGraph: {
      locale: "en_US",
      type: "article",
      title: post?.title || "Your Search Box Blog",
      description:
        post?.description ||
        "Discover how AI search can double your website traffic in just 30 days.",
      siteName: "Your Search Box",
      url: `https://your-search-box.vercel.app/blog/${post?.slug?.current}`,
      images: [
        {
          url:
            post?.imageURL || "https://your-search-box.vercel.app/og-image.png",
          width: 1200,
          height: 627,
          alt: post?.mainImage?.alt || "Your Search Box - Effective AI Search",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://your-search-box.vercel.app",
      title: post?.title || "Your Search Box Blog",
      description:
        post?.description ||
        "Discover how AI search can boost your website performance.",
      images: [
        {
          url:
            post?.imageURL || "https://your-search-box.vercel.app/og-image.png",
          width: 1200,
          height: 627,
          alt: post?.mainImage?.alt || "Your Search Box - Effective AI Search",
        },
      ],
    },
    alternates: {
      canonical: `https://your-search-box.vercel.app/blog/${post?.slug?.current}`,
    },
  };
}

const PostPage = async ({ params }: { params: any }) => {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  return <Post post={post} />;
};

export default PostPage;
