'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import blogData from "@/blog-data.json";

const BlogCards = () => {
  return (
    <section className="py-12 md:py-24" id="blogs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.p
            className="text-sm font-semibold text-blue-500 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            OUR BLOG
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Latest Insights and Updates
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stay informed with our latest articles on AI-powered search technology and industry trends.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <Image
                src={post.img}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Read more
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
