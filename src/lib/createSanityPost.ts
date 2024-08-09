import { fetchPosts } from "./mongodb";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID; // Your Sanity project ID
const datasetName = process.env.SANITY_STUDIO_DATASET; // Your Sanity dataset name
const tokenWithWriteAccess = process.env.SANITY_API_READ_TOKEN;

export async function createSanityPosts() {
  const posts = await fetchPosts();

  // Create an array of mutations
  const mutations = posts.map((post) => ({
    createIfNotExists: {
      _id: post._id.toString(), // Ensure _id is a string
      _type: "showcase", // Create as a showcase document
      baselink: post.baselink,
      questions: post.questions,
      date: new Date(post.date).toISOString(),
    },
  }));

  console.log("Mutations to be sent to Sanity:", mutations); // Log mutations

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
