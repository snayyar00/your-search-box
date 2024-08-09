
import { NextResponse } from 'next/server';
import { createSanityPosts } from '@/lib/createSanityPost';

export async function POST() {
  try {
    await createSanityPosts();
    return NextResponse.json({ message: 'Posts created successfully' });
  } catch (error) {
    console.error('Error creating posts:', error);
    return NextResponse.json({ error: 'Failed to create posts' }, { status: 500 });
  }
}