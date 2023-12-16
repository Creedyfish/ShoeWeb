import { NextResponse, userAgent } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"
export const POST = async (req: Request, res: Response) => {
    try {
        const userData = await req.json()
       
        
       const getUser = await prisma.user.findFirst({
        where: {
            email: userData.email,
            },
        }
       )
       if (getUser)
      return NextResponse.json({
       
        message: "Username already exists.",
        field: "userName",
      }, {status: 409});

      const salt = await bcrypt.genSalt(Number(process.env.SALT_KEY));
      const hashedPassword = await bcrypt.hash(userData.password,salt)
      userData.password = hashedPassword
      
        const user = await prisma.user.create({
            data: {
                email: userData.email,
                password: userData.password,
                role: 'user'
                },
            }
         )
         

    return NextResponse.json({data : user}, {status: 201})
    } catch (error) {
        return NextResponse.json(error)
            
    }
}
