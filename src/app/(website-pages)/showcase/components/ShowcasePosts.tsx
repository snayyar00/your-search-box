import CreatePostsButton from "@/app/components/CreatePostButton";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const ShowcasePosts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="py-10 mx-auto grid grid-cols-1 text-white">
      <div className="flex items-center justify-between">
        <p className="text-xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          Latest showcase:
        </p>
        <CreatePostsButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <Link
            className="p-4 flex flex-col items-center justify-between hover:opacity-90 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 border border-gray-500"
            key={post._id}
            href={`/showcase/${post.slug.current}`}
          >
            <div className="inline-flex p-2">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
                  {post.baselink}
                </h2>
                <p className="py-2 text-gray-400 text-xs font-light uppercase">
                  <span className="text-gray-300 pr-2">UpdatedAt:</span>
                  {convertDate(post._updatedAt)}
                </p>
                <p className="py-2 text-gray-400 text-xs font-light uppercase">
                  <span className="text-gray-300 pr-2">Created Date:</span>
                  {convertDate(post.date)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowcasePosts;
