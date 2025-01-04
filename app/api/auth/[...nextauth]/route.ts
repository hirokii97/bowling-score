import { signInWithEmailAndPassword } from "firebase/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import { auth } from "@/app/lib/firebase";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    uid: string;
    accessToken?: string;
  }
}

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("メールアドレスとパスワードが必要です");
        }
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );
          return {
            id: userCredential.user.uid,
            email: userCredential.user.email,
            name: userCredential.user.displayName,
          };
        } catch (error) {
          throw new Error("認証に失敗しました");
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        if (account && account.provider === "google") {
          token.accessToken = account.access_token;
        }
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.id = token.id;
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
