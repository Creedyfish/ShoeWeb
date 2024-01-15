import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: Request,{params}: {params: {id: string}}, res: NextResponse) {
   try {
       
       const getCart = await prisma.cart.findMany({
         where:{
            user_id: params.id
         },
         include:{Product:true}
       })
       
       return NextResponse.json(getCart);
   } catch (error) {
       return NextResponse.json({ data: error }, { status: 400 });
   }
   }