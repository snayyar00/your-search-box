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
        <Link href="/blog" className="text-blue-500 hover:underline">
          Return to Blog List
        </Link>
      </div>
    );
  }

  return (
    <main className="py-12 md:py-24 text-gray-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10">
        <BackgroundGridImage className="w-full h-full object-cover opacity-40" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-b from-blue-700 to-blue-500 bg-clip-text text-transparent max-w-3xl mx-auto">
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
                      <h1 style={{ color: "#7f8c8d" }} {...props} /> // Soft grayish-blue for <h1>
                    ),
                    h2: ({ node, ...props }) => (
                      <h2 style={{ color: "#95a5a6" }} {...props} /> // Light gray for <h2>
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 style={{ color: "#2ecc71" }} {...props} /> // Soft green for <h3>
                    ),
                    p: ({ node, ...props }) => (
                      <p style={{ color: "#7f8c8d" }} {...props} /> // Soft grayish-blue for <p>
                    ),
                    a: ({ node, ...props }) => (
                      <a style={{ color: "#3498db" }} {...props} /> // Sky blue for <a>
                    ),
                    strong: ({ node, ...props }) => (
                      <strong style={{ color: "#e74c3c" }} {...props} /> // Light red for <strong>
                    ),
                    em: ({ node, ...props }) => (
                      <em style={{ color: "#f39c12" }} {...props} /> // Light orange for <em>
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        style={{ color: "#7f8c8d", marginLeft: "1.5rem" }}
                        {...props}
                      /> // Soft grayish-blue for <ul>
                    ),
                    li: ({ node, ...props }) => (
                      <li
                        style={{ color: "#7f8c8d", marginBottom: "0.5rem" }}
                        {...props}
                      /> // Soft grayish-blue for <li>
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        style={{
                          borderLeft: "4px solid #3498db",
                          paddingLeft: "1rem",
                          color: "#7f8c8d",
                        }}
                        {...props}
                      /> // Sky blue border for blockquotes
                    ),
                    code: ({ node, ...props }) => (
                      <code
                        style={{
                          backgroundColor: "#ecf0f1",
                          color: "#2c3e50",
                          padding: "0.2rem 0.4rem",
                          borderRadius: "4px",
                        }}
                        {...props}
                      /> // Light background for code
                    ),
                    img: ({ node, ...props }) => (
                      <img
                        style={{ borderRadius: "8px", maxWidth: "100%" }}
                        {...props}
                      /> // Rounded corners for images
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
              className="flex items-center justify-center px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-300 text-center"
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
