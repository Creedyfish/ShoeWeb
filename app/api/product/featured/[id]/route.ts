import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function DELETE (req: Request, { params }: { params: { id: string } }, res: NextResponse) {
  try {
    console.log(req)
    const deleteProduct = await prisma.featured_Products.delete({
      where: {
        id: parseInt(params.id)
      }
    })
    return NextResponse.json(deleteProduct);
  }
  catch (error) {
    return NextResponse.json({ data: error }, { status: 400 });
  }
}