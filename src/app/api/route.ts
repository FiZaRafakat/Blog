import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Import your Sanity client

// Handle POST requests (webhook handler)
export async function POST(request: Request) {
  try {
    const data = await request.json(); // Parse the incoming JSON payload

    // Destructure and validate the required fields in the incoming data
    const { comment, name, email, blogId } = data;

    if (!comment || !name || !email || !blogId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Save the comment to Sanity
    const newComment = await client.create({
      _type: 'comment',  // This matches your comment schema type
      comment: comment,
      name: name,
      email: email,
      blogId: blogId,
      createdAt: new Date().toISOString(),  // Set the current timestamp
    });

    // Return success response with the created comment
    return NextResponse.json(newComment, { status: 201 });

  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
