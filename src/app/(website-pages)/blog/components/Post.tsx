"use client";

import React, { useState, useEffect } from "react";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundGridImage from "@/assets/why-choose-us-grid.svg";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500); // Simulate loading
  }, []);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-white z-50">
        <h1 className="text-4xl font-bold mb-4">Blog post not found</h1>
        <Link href="/blog" className="text-blue-400 hover:underline">
          Return to blog list
        </Link>
      </div>
    );
  }

  return (
    <main className="py-12 md:py-24 text-white relative overflow-clip">
      <div className="container mx-auto px-4  prose prose-xl text-gray-200 prose-">
        {/* Background grid */}
        <div className="w-full absolute left-0 -top-[25rem] min-h-96 opacity-60 z-0">
          <BackgroundGridImage className="w-full h-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-header bg-gradient-to-b from-white to-[#586285] text-transparent bg-clip-text text-4xl font-bold mb-8 text-center max-w-2xl  mx-auto  ">
            {post.title}
          </h1>
          <div className="flex flex-col items-center justify-center  gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-96  flex items-center justify-center "
            >
              {post?.mainImage ? (
                <Image
                  src={builder.image(post.mainImage).url()}
                  alt={post?.mainImage?.alt}
                  width={300}
                  height={300}
                  // layout="fill"
                  //   objectFit="cover"
                  className="rounded-lg "
                />
              ) : null}
            </motion.div>
            {post?.body ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-[#C6C1B9] mb-8 leading-relaxed max-w-5xl"
              >
                <PortableText value={post.body} />
              </motion.div>
            ) : null}
          </div>
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 my-10 z-50"
          >
            Back to Blog List
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default Post;
