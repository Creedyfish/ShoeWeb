import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
export const POST = async (req: Request, res: Response) => {
    try {
        const params = await req.json()
        
        
       const getUser = await prisma.user.findUnique({
        where: {
            email: params.email,
            },
        }
       )
       if (getUser)
      return NextResponse.json({
        status: 400,
        message: "Username already exists.",
        field: "userName",
      });
// {
    //     status: 400,
    //     message: "Username already exists.",
    //     field: "userName",
    //   };
        //  const user = await prisma.user.create({
        //   data: {
        //         email: params.email,
        //         },
        //   }
        //  )

    return NextResponse.json(params)
    } catch (error) {
        return NextResponse.json(error)
            
    }
}
