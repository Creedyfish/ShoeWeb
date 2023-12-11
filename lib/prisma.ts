import { PrismaClient } from "@prisma/client";

const globalForPrism = global as unknown as {prisma : PrismaClient};

export const prisma = globalForPrism.prisma || new PrismaClient({log: ['query']});
if (process.env.NODE_ENV !== 'development') globalForPrism.prisma; 

export default prisma;