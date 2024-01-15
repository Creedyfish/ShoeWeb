import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";


export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
     
      name: "Credentials",
      
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: { label: "email", type: "email", placeholder: "your-email" },
        password: { label: "Password", type: "password" }
        
      },
      async authorize(credentials) {
       
        
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          }
        })
        if (!user){
          return null
        }
        const match = await bcrypt.compare(credentials?.password?? '', user.password);
          if (!match) {
            return null
          }

          return user
        
      }
      
    })
  

  
  ]
  ,callbacks: {
    async jwt({ token, user}) {
     
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token}) {
      
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        
      }
      return session;
    },
    
  },session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    
  },
}