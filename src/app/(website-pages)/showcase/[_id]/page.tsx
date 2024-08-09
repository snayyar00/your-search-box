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

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(showcasePathsQuery);
  return posts;
}

const PostPage = async ({ params }: { params: any }) => {
  const post = await sanityFetch<SanityDocument>({
    query: showcaseQuery,
    params,
  });
  return <ShowCasePost post={post} />;
};

export default PostPage;
