import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export async function GET(req: Request, res: NextResponse) {
    try {
      const featuredProducts = await prisma.featured_Products.findMany({
        include: {
          Product: true,
        },
      });
     
      const featProds = featuredProducts.map((prod) => {
        return {
      Featured_Products: {
        tagline: prod.tagline,
        feat_image: prod.feat_image,
      },
      product_id: prod.Product.product_id,
      name: prod.Product.name,
      bgcolor: prod.Product.bgcolor,
      desc: prod.Product.description,
      image: prod.Product.image,
      price:prod.Product.price,
      

        };

       
      });

    return NextResponse.json(featProds);
  } catch (error) {
    return NextResponse.json(error);
  }
}