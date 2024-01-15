import { DefaultSession } from "next-auth";
import { User as NextAuthUser } from 'next-auth'


interface UserSession {
  id:string,
  role: string;
  name: string;
  email: string;
}

declare module "next-auth" {
  interface AdapterUser extends UserSession {
    user: UserSession;
  }
}
declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: UserSession;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: UserSession;
  }
}

declare module "next-auth/adapters" {
  interface User extends UserSession {}
}
declare module 'next-auth' {
  interface User extends NextAuthUser {
    role: UserSession.role
  
    
  }
  
}

