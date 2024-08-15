import { NextResponse } from 'next/server';
import { createSanityPosts } from '@/lib/createSanityPost';

export async function POST() {
  try {
    await createSanityPosts();
    return NextResponse.json({ message: 'Sanity data updated successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update Sanity data' }, { status: 500 });
  }
}