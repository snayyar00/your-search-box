import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env');
}

if (process.env.NODE_ENV === 'development') {
  if (!(global as any).mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any).mongoClientPromise = client.connect();
  }
  clientPromise = (global as any).mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// New function to fetch only new or updated posts from MongoDB
export async function fetchNewPosts(lastUpdateTime: Date) {
  await clientPromise;
  const database = client.db('test');
  const collection = database.collection('pseowebsiteschemas');
  const posts = await collection.find({
    $or: [
      { createdAt: { $gt: lastUpdateTime } },
      { updatedAt: { $gt: lastUpdateTime } }
    ]
  }).toArray();
  return posts;
}

// export async function fetchPosts() {
//   await clientPromise; // Ensure the client is connected
//   const database = client.db('test'); // Replace with your database name
//   const collection = database.collection('pseowebsiteschemas'); // Replace with your collection name
//   const posts = await collection.find({}).toArray();
//   return posts;
// }

export default clientPromise;