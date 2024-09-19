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
    <div className="py-14 px-6 mx-auto max-w-7xl relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br  opacity-20 -z-10"
        initial={{ opacity: 0.2, y: -200 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-14">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-slow"
        >
          Latest Showcase
        </motion.p>
        <CreatePostsButton />
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
        {posts.map((post) => (
          <Link key={post._id} href={`/showcase/${post.slug.current}`} passHref>
            <motion.div
              className="relative group p-6 bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 border border-gray-700 hover:shadow-3xl hover:shadow-pink-500/40 hover:scale-[1.08] hover:-rotate-1 hover:border-gradient hover:border-pink-400"
              style={{ minHeight: "220px" }}
              whileHover={{ scale: 1.08, rotate: -1, skewY: 1 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated Background Texture */}
              <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-transparent to-purple-500 opacity-10 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="flex-grow w-full">
                <motion.h2
                  className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-pink-400 group-hover:to-yellow-300 transition-colors duration-500 ease-in-out"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.7 }}
                >
                  {post.baselink}
                </motion.h2>
                <motion.p
                  className="text-gray-400 text-sm font-light uppercase mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  <span className="text-gray-300 pr-2">Updated:</span>
                  {convertDate(post._updatedAt)}
                </motion.p>
                <motion.p
                  className="text-gray-400 text-sm font-light uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.7 }}
                >
                  <span className="text-gray-300 pr-2">Created:</span>
                  {convertDate(post.date)}
                </motion.p>
              </div>
              {/* Dynamic Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-pink-500/40 group-hover:to-purple-500/40 rounded-lg transition-all duration-500"></div>
              {/* Neon Pulse Effect */}
              <div className="absolute inset-0 z-[-2] rounded-2xl group-hover:animate-pulse-neon transition-all duration-700"></div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowcasePosts;
