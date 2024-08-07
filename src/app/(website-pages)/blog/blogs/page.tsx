"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/blog-data.json";
import { motion } from "framer-motion";
import BackgroundGridImage from "@/assets/why-choose-us-grid.svg";

interface BlogPostParams {
  params: {
    blogId: string;
  };
}

const BlogPost: React.FC<BlogPostParams> = ({ params }) => {
  const [isLoading, setIsLoading] = useState(true);
  const blogId = parseInt(params.blogId);
  const post = blogData.find((post) => post.id === blogId);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500); // Simulate loading
  }, []);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Blog post not found</h1>
        <Link href="/blog" className="text-blue-400 hover:underline">
          Return to blog list
        </Link>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-24 text-white relative overflow-clip">
      <div className="container mx-auto px-4">
        {/* Background grid */}
        <div className="w-full absolute left-0 -top-[25rem] min-h-96 opacity-60">
          <BackgroundGridImage className="w-full h-full" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-header bg-gradient-to-b from-white to-[#586285] text-transparent bg-clip-text text-4xl font-bold mb-8 text-center">
            {post.title}
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-96 mb-12"
          >
            <Image
              src={post.img}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/80 mb-8 leading-relaxed"
          >
            {post.description}
          </motion.p>
          
          {/* Placeholder for additional content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Additional Content</h2>
            <p className="text-white/80">
              This is where you can add more detailed content for the blog post.
              Consider including sections like:
            </p>
            <ul className="list-disc list-inside mt-4 text-white/80">
              <li>In-depth analysis</li>
              <li>Related examples</li>
              <li>Expert opinions</li>
              <li>Interactive elements (if applicable)</li>
            </ul>
          </motion.div>
          
          <Link href="/#blogs" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
            Back to Blog List
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPost;

