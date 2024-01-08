import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req:NextRequest,res:NextResponse){}


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
          }
          console.log(body)
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



        return NextResponse.json({ message: "Product added to cart" }, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
} 