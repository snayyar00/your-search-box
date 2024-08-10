import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post"] {
  _createdAt,
  title,
  slug,
  mainImage,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
}`;

// Get all showcase
export const showcasesQuery = groq`*[_type == "showcase"] {
  _id,
  date,
  slug,
  baselink,
  _updatedAt
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, description, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

  export const showcaseQuery = groq`*[_type == "showcase" && slug.current == $slug][0]{ 
    baselink, date, _updatedAt, questions
  }`;

// Get all showcase slug
export const showcasePathsQuery = groq`*[_type == "showcase" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;
