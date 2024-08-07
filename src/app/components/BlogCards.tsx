import React from "react";
import blogData from "@/blog-data.json";
import Posts from "../(website-pages)/blog/components/Posts";

import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
const BlogCards = async () => {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  return (
    <section className="py-12 text-white" id="blogs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-500 mb-10">OUR BLOG</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text ">
            Latest Insights and Updates
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Stay informed with our latest articles on AI-powered search
            technology and industry trends.
          </p>
        </div>
        <div className="relative">
          <Link
            className="absolute right-10 top-10 text-gray-400 text-base font-semibold hover:text-gray-300"
            href={"/blog"}
          >
            {" "}
            view all blogs
          </Link>
          <Posts posts={posts} />
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
