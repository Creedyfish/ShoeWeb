import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request,{params}: {params: {id: string}}, res: NextResponse) {
try {
    
    const getProduct = await prisma.product.findUnique({
        where: {
            product_id: parseInt(params.id)
        },
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
    return NextResponse.json(getProduct);
} catch (error) {
    return NextResponse.json({ data: error }, { status: 400 });
}
}