import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req:NextRequest,res:NextResponse){
 try {
  const body = await req.json()
  // console.log(body)
  // const deleteList = body.map((item)=>{
  //   console.log(item)
  // })
  const user = await prisma.user.findUnique({
    where: {
      id: body.userId
    }
  });
  if(!user){
    return NextResponse.json({ message: 'User not found' });
  } else{
    const deleteItem = await prisma.cart.delete({
      where: {
        product_id_user_id: {
          product_id: body.productId,
          user_id: body.userId,
        },
    }})
  }
  return NextResponse.json({ message: "Product deleted to cart" }, { status: 201 });
 } catch (error) {
  return NextResponse.json(error)
 }
}

export async function POST(req:NextRequest,res:NextResponse){
    try {
        const body = await req.json()
        const user = await prisma.user.findUnique({
            where: {
              email: body.session.email
            }
          });
          
          // Check if the user exists
          if (!user) {
            throw new Error('User not found');
          } else {
            const addCart = await prisma.cart.upsert({
              where: {
                product_id_user_id: {
                  product_id: body.product_id,
                  user_id: user.id,
                }
              },
              update: {
                quantity: {
                  increment: body.quantity
                },
                
              },
              create: {
                product_id: body.product_id,
                user_id: user.id,
                quantity: body.quantity,
      
              }
            });

          }
         
        



        return NextResponse.json({ message: "Product added to cart" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
} 