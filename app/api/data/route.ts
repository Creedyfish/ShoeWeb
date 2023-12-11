import prisma from '@/lib/prisma';
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const post = 'Hello World';
   return NextResponse.json({ data: post });
    
  } catch (error) {
    return NextResponse.json({ data: error });
  }
  
}