import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// Prevent multiple instances in development
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'], // Optional: helpful for debugging
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
