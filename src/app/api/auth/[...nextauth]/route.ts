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
            name: user.name || user.email.split("@")[0] || "User",
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
        if (!user.email) {
          console.error("Google Auth failed: Email is missing");
          return false;
        }

        await connect();
        const existingUser = await users.findOne({ email: user.email });

        if (!existingUser) {
          const hashedPassword = await bcrypt.hash(
            Math.random().toString(36).slice(-8),
            10,
          );

          await users.create({
            name: user.name || user.email.split("@")[0] || "Google User",
            email: user.email,
            password: hashedPassword,
            image: user.image || "",
          });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.picture as string;
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
