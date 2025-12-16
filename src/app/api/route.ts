import { NextResponse } from "next/server";
import ZAI from 'z-ai-web-dev-sdk';

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}

export async function POST() {
  try {
    const zai = await ZAI.create();

    const response = await zai.images.generations.create({
      prompt: 'Professional education logo for PT HOMESCHOOLING SMART MAKASSAR, modern design with graduation cap and book elements, blue and green color scheme, clean and educational style, minimalist design suitable for website',
      size: '512x512'
    });

    // Returns base64 encoded image data
    const imageBase64 = response.data[0].base64;
    
    return NextResponse.json({ 
      success: true, 
      image: imageBase64 
    });

  } catch (error) {
    console.error('Logo generation failed:', error.message);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}