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

export async function POST(req: Request, res: NextResponse) {
    try {
      const { product_id, name, desc, price, image, bgcolor, Featured_Products} = await req.json();
      
      const newProduct = await prisma.product.upsert({
        where: { product_id: product_id || -1 },
        update: {
          name : name,
          description: desc,
          price: price,
          image: image,
          bgcolor: bgcolor
        },
        create: {
          name : name,
          description: desc,
          price: price,
          image: image,
          bgcolor: bgcolor
        },
      });
      if (Featured_Products) {
        await prisma.featured_Products.upsert({
          where: { id: product_id || -1 },
          update: {
            tagline: Featured_Products.tagline,
            feat_image: Featured_Products.feat_image,
          },
          create: {
            tagline: Featured_Products.tagline,
            feat_image: Featured_Products.feat_image,
            Product: {
              connect: { product_id: product_id }
            }
          },
        });
      }
        return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json(error);
  }
}