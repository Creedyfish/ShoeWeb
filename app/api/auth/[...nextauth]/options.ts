import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";


export const options: NextAuthOptions = {
    providers: [
  GoogleProvider({
    profile(profile) {
      let userRole: string = 'user';
      if (profile?.email === 'admin@gmail.com') {
        userRole = 'admin';
      }
      return {
       ...profile,
       id: profile.sub,
       role : userRole
      }
    },
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  }),
  ],callbacks: {
    async jwt({ token, user }) {
     
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      
      if (token && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },secret: process.env.NEXTAUTH_SECRET,
}