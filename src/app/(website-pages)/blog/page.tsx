"use client";
import React from "react";
import { motion } from "framer-motion";
import BackgroundGridImage from "@/assets/why-choose-us-grid.svg";
import BlogCards from '@/app/components/BlogCards';

const BlogPage = () => {
  return (
    <section className="py-12 md:py-24 text-white relative overflow-clip">
      <div className="container mx-auto px-4">
        {/* Background grid */}
        <div className="w-full absolute left-0 -top-[25rem] min-h-96 opacity-60">
          <BackgroundGridImage className="w-full h-full" />
        </div>
        
        <motion.h1 
          className="section-header bg-gradient-to-b from-white to-[#586285] text-transparent bg-clip-text text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Blog
        </motion.h1>
        
        <BlogCards />
      </div>
    </section>
  );
};

export default BlogPage;

