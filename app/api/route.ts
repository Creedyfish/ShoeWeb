import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function GET(req: Request, res: NextResponse) {
    try {
      const featuredProducts = await prisma.featured_Products.findMany({
        include: {
          Product: {
            select: {
              name: true,
              product_id: true,
              bgcolor : true,
            },
          },
        },
      });
      const featProds = featuredProducts.map((prod) => {
        return {
          product_id: prod.Product.product_id,
          name: prod.Product.name,
          tagline: prod.tagline,
          image: prod.feat_image,
          bgcolor : prod.Product.bgcolor,
        };
      });
    return NextResponse.json(featProds);
  } catch (error) {
    return NextResponse.json(error);
  }
}