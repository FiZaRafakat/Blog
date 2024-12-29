import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Import your Sanity client



export async function POST(request : NextResponse) {
    try {
      const data = await request.json(); // Parse incoming data
  
      // Destructure the required fields from the data
      const { comment, name, email, blogId } = data;
  
      if (!comment || !name || !email || !blogId) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
  
      // Save the comment to Sanity
      const newComment = await client.create({
        _type: 'comment',
        comment: comment,
        name: name,
        email: email,
        blogId: blogId,
        createdAt: new Date().toISOString(),
      });
  
      return NextResponse.json(newComment, { status: 201 });
  
    } catch (error) {
      console.error('Error processing webhook:', error);
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
  }
  
