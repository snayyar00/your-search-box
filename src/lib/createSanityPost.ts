import { fetchPosts } from "./mongodb";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const datasetName = process.env.SANITY_STUDIO_DATASET;
const tokenWithWriteAccess = process.env.SANITY_API_READ_TOKEN;

function generateSlug(baselink: string, id: string): string {
  const match = baselink.match(/^https?:\/\/(?:www\.)?([^/]+)/)
  let slug = match ? match[1] : baselink;
  
  // Remove common TLDs and replace remaining periods with hyphens
  slug = slug
    .replace(/\.(com|org|net|io)$/, '')
    .replace(/\./g, '-')
    .toLowerCase();

  return `${slug}`;
}

export async function createSanityPosts() {
  const posts = await fetchPosts();

  const mutations = posts.map((post) => ({
    createOrReplace: {
      _id: post._id.toString(),
      _type: "showcase",
      baselink: post.baselink,
      slug: {
        _type: "slug",
        current: generateSlug(post.baselink, post._id.toString())
      },
      questions: post.questions,
      date: new Date(post.date).toISOString(),
    },
  }));

  console.log("Mutations to be sent to Sanity:", mutations);

  try {
    const response = await fetch(
      `https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${datasetName}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenWithWriteAccess}`,
        },
        body: JSON.stringify({ mutations }),
      }
    );

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Error creating posts: ${errorDetails.error}`);
    }

    const result = await response.json();
    console.log("Posts created:", result);
  } catch (error) {
    console.error("Error creating posts:", error);
  }
}
