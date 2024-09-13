"use client";

import { motion } from "framer-motion";
import CreatePostsButton from "@/app/components/CreatePostButton";
import type { SanityDocument } from "@sanity/client";
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
    <div className="py-10 mx-auto max-w-6xl">
      <div className="flex items-center justify-between mb-10">
        <p className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500">
          Latest showcase:
        </p>
        <CreatePostsButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post._id} href={`/showcase/${post.slug.current}`} passHref>
            <motion.div
              className="flex flex-col items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 border border-gray-700"
              style={{ height: "150px" }} // Set a fixed height for uniformity
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-full flex-grow">
                {" "}
                {/* Ensure content stretches */}
                <h2 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-300">
                  {post.baselink}
                </h2>
                <p className="text-gray-400 text-xs font-light uppercase mb-1">
                  <span className="text-gray-300 pr-2">Updated At:</span>
                  {convertDate(post._updatedAt)}
                </p>
                <p className="text-gray-400 text-xs font-light uppercase">
                  <span className="text-gray-300 pr-2">Created Date:</span>
                  {convertDate(post.date)}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowcasePosts;
