import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { useCallback } from "react";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Utilizador", type: "text" },
        password: { label: "Palavra-Passe", type: "password" },
      },
      async authorize(credentials) {

        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });


        if (!user) {
          return null; 
        }

        const isValid = await bcrypt.compare(credentials.password, user.password_hash);


        if (!isValid) {
          return null;
        }

        await prisma.user.update({
            where: {id: user.id},
            data: {last_login: new Date() },
        });

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,

  },
  callbacks: {
    async jwt({ token, user}){
      if(user){
        token.id = user.id;
      }
      return token
    },
    async session({ session, token }){
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/auth",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
