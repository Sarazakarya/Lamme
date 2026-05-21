import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "../../../../../lib/Data/db";

import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";
import users from "@/models/users";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();
        try {
          if (!credentials?.email || !credentials.password) {
            return null;
          }

          const user = await users.findOne({ email: credentials.email });
          if (!user) return null;

          const isMatch = await bcrypt.compare(
            credentials.password,
            user.password,
          );
          if (!isMatch) return null;

          return {
            id: user._id.toString(),
            name: user.name || "User",
            email: user.email,
          };
        } catch (err) {
          console.error("Auth Failed Error:", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        await connect();
        const existingUser = await users.findOne({ email: user.email });
        if (!existingUser) {
          await users.create({
            username: user.name?.replace(/\s+/g, "").toLowerCase() || "user",
            email: user.email,
            password: "",
          });
        }
      }
      return true;
    },

    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/Login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
