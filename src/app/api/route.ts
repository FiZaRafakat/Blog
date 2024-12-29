import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Import your Sanity client



export async function POST(request: NextRequest) {
    try {
      const data = await request.json();
  
      // Destructure and validate the required fields
      const { comment, name, email, blogId } = data;
  
      if (!comment || !name || !email || !blogId) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
  
      // Save the comment to Sanity
      const newComment = await client.create({
        _type: 'comment',
        comment,
        name,
        email,
        blogId,
        createdAt: new Date().toISOString(),
      });
  
      // Return a success response
      return NextResponse.json(newComment, { status: 201 });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
  }
  
