import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request, res: NextResponse) {
    try {
      const getproducts = await prisma.product.findMany({
        select: {
            product_id: true,
            name: true,
            description: true,
            price: true,
            image: true,
            bgcolor: true,
            Featured_Products: true
        }
            
      })
      const products = getproducts.map((prod) => {
        return {
          product_id: prod.product_id,
          name: prod.name,
          desc: prod.description,
          price: prod.price,
          image: prod.image,
          bgcolor : prod.bgcolor,
          isFeatured: prod.Featured_Products !== null
        };
      })
      return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(error);
  }
}