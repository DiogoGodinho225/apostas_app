import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Utilizador", type: "text" },
        password: { label: "Palavra-Passe", type: "password" },
      },
      async authorize(credentials) {

        console.log(credentials.username);
        console.log(credentials.password);
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
  pages: {
    signIn: "/auth",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
