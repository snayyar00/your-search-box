import { fetchNewPosts } from "./mongodb";
import { client } from "@/sanity/lib/client";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const datasetName = process.env.SANITY_STUDIO_DATASET;
const tokenWithWriteAccess = process.env.SANITY_API_READ_TOKEN;

function generateSlug(baselink: string, id: string): string {
  const match = baselink.match(/^https?:\/\/(?:www\.)?([^/]+)/);
  let slug = match ? match[1] : baselink;

  // Remove common TLDs and replace remaining periods with hyphens
  slug = slug
    .replace(/\.(com|org|net|io)$/, "")
    .replace(/\./g, "-")
    .toLowerCase();

  // Append a portion of the unique ID to ensure uniqueness
  return `${slug}-${id.slice(-6)}`;
}

async function getLastUpdateTime() {
  const result = await client.fetch(
    '*[_type == "lastUpdate"][0].lastUpdateTime'
  );
  return result ? new Date(result) : new Date(0);
}

async function updateLastUpdateTime() {
  const now = new Date().toISOString();
  await client.createOrReplace({
    _type: "lastUpdate",
    _id: "lastUpdateTime",
    lastUpdateTime: now,
  });
}

export async function createSanityPosts() {
  const lastUpdateTime = await getLastUpdateTime();
  const newPosts = await fetchNewPosts(lastUpdateTime);
  // const posts = await fetchPosts();

  const mutations = newPosts.map((post) => ({
    createOrReplace: {
      _id: post._id.toString(),
      _type: "showcase",
      baselink: post.baselink,
      slug: {
        _type: "slug",
        current: generateSlug(post.baselink, post._id.toString()),
      },
      questions: post.questions,
      date: new Date(post.date).toISOString(),
    },
  }));
  
  if (mutations.length === 0) {
    console.log("No new posts to update");
    return;
  }

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
