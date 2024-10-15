"use client";

import React, { useState, useEffect } from "react";
import { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundGridImage from "@/assets/why-choose-us-grid.svg";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const builder = imageUrlBuilder(client);

const ShowCasePost = ({ post }: { post: SanityDocument }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500); // Simulate loading
  }, []);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-gray-200 z-50">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-300">
          Post Not Found
        </h1>
        <Link href="/showcase" className="text-blue-500 hover:underline">
          Return to Showcase List
        </Link>
      </div>
    );
  }

  return (
    <main className="py-12 md:py-24 text-gray-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10">
        <BackgroundGridImage className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 bg-gradient-to-br from-teal-100 via-blue-50 to-white shadow-lg rounded-lg p-8 md:p-12"
        >
          <h1 className="text-5xl font-extrabold mb-6 text-center bg-gradient-to-br from-blue-700 to-teal-500 bg-clip-text text-transparent max-w-3xl mx-auto">
            {post.baselink}
          </h1>

          <div className="flex flex-col items-center gap-12">
            {post?.questions && post.questions[0] ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="prose prose-lg leading-relaxed max-w-4xl mx-auto"
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.7",
                  maxWidth: "70rem",
                }}
              >
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1 className="text-3xl font-bold text-gray-800 mb-4" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2 className="text-2xl font-semibold text-gray-700 mb-3" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 className="text-xl font-medium text-teal-600 mb-2" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                      <p className="text-gray-600 mb-4" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a className="text-blue-600 hover:underline" {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong className="text-red-500" {...props} />
                    ),
                    em: ({ node, ...props }) => (
                      <em className="text-orange-400" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc list-inside text-gray-600 mb-4" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="text-gray-600 mb-2" {...props} />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4" {...props} />
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-gray-200 text-gray-800 p-1 rounded" {...props} />
                    ),
                    img: ({ node, ...props }) => (
                      <img className="rounded-lg shadow-md mb-4" {...props} />
                    ),
                  }}
                >
                  {post.questions[0]}
                </ReactMarkdown>
              </motion.div>
            ) : null}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/showcase"
              className="flex items-center justify-center px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300 text-center"
            >
              Back to Showcase List
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ShowCasePost;
