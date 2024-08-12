import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="py-10 mx-auto grid grid-cols-1 text-white">
      <p className="text-xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
        Latest Posts:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <>
            <Link
              className="p-4 flex flex-col items-center justify-between hover:opacity-90 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 border border-gray-500"
              key={post._id}
              href={`/blog/${post.slug.current}`}
            >
              <div className="inline-flex p-2">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
                    {post.title}
                  </h2>
                  <p className="py-2 text-gray-400 text-xs font-light uppercase">
                    {convertDate(post._createdAt)} • {post.authorName}
                  </p>
                </div>
                {post?.mainImage && (
                  <Image
                    className="max-w-[35%] h-48 object-cover"
                    src={post.imageURL}
                    alt={post.mainImage.alt}
                    width={400}
                    height={250}
                    loading="lazy"
                  />
                )}
              </div>
              <p className="py-1 text-gray-400 text-xs font-light uppercase hover:text-gray-300  text-center">
                Read full article
              </p>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Posts;
