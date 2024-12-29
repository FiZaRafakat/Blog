import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Validate the secret token
  const secret = process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET;
  const incomingSecret = req.headers.get('x-sanity-webhook-secret');

  if (!secret || incomingSecret !== secret) {
    return NextResponse.json(
      { message: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();

    // Validate payload type
    if (!body || body._type !== 'comment') {
      return NextResponse.json(
        { message: 'Invalid payload' },
        { status: 400 }
      );
    }

    // Process webhook data
    console.log('Webhook received:', body);

    // Respond to Sanity
    return NextResponse.json(
      { message: 'Webhook processed successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

