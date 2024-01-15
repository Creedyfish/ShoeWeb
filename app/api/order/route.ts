import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
interface Order {
    user_id:string,
    product_id:number,
    quantity:number,
    cart_id:string
}

export async function POST(req:NextRequest,res:NextResponse){
    const body = await req.json()
    const createTransaction = body.map((item:Order)=>{
        console.log({cart_id:item.cart_id,user_id:item.user_id,
                    product_id:item.product_id,
                    quantity: item.quantity})
        return prisma.orders.create({
            data:{
                user_id:item.user_id,
                product_id:item.product_id,
                quantity: item.quantity
            }
        })
    })
    const deleteCartItems = body.map((item:Order)=>{
        return prisma.cart.delete({
            where:{
                cart_id:item.cart_id
            }
        })
    })

   try {
    await prisma.$transaction([...createTransaction, ...deleteCartItems]);
    return NextResponse.json({message:"niuce",status:201})
   } catch (error) {
    return NextResponse.json({message:error,status:401})
   }
}