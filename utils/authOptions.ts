
import { SupabaseAdapter } from "@auth/supabase-adapter";
import { Account, AuthOptions, Session } from "next-auth";
import { Adapter } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import GoogleProvider from 'next-auth/providers/google'
import connectMongoDb from "./mongo-connect";
import User from "./models/users";

export type AuthUser = {
  name: string;
  email: string;
  image: string;
  access_token: string;
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  scope: string;
  id: string;
};

 const authOptions : AuthOptions = {
    providers:[
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        }),
  ],
  adapter: SupabaseAdapter({
      url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
      secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ?? "",
    }) as Adapter,
    callbacks : {
      async jwt({ token, account }: { token: JWT; account: Account | null }) {
        if (!account) {
          return token;
        }
  
        const updatedToken = {
          ...token,
          access_token: account?.access_token,
          token_type: account?.token_type,
          expires_at: account?.expires_at ?? Date.now() / 1000,
          expires_in: (account?.expires_at ?? 0) - Date.now() / 1000,
          refresh_token: account?.refresh_token,
          scope: account?.scope,
          id: account?.providerAccountId,
        };
  
        return updatedToken;
      },
      async session({ session, token }: { session: any; token: any }) {
        const user: AuthUser = {
          ...session.user,
          access_token: token.access_token,
          token_type: token.token_type,
          expires_at: token.expires_at,
          expires_in: token.expires_in,
          refresh_token: token.refresh_token,
          scope: token.scope,
          id: token.id,
        };
        session.user = user;
        session.error = token.error;
        return session;
      },
      // @ts-ignore
      async signIn({ user, account }: { user: AuthUser; account: Account }) {
        if (account?.provider == "google") {
          await connectMongoDb();
          try {
            const existingUser = await User.findOne({ email: user.email });
            if (!existingUser) {
              const newUser = new User({
                email: user.email,
                name: user.name,
                image: user.image,
              });
  
              await newUser.save();
              return true;
            }
            return true;
          } catch (err) {
            console.log("Error saving user", err);
            return false;
          }
        }
      },
      },
    session : {
      maxAge : 365 * 60 * 60,
      strategy: "jwt"
    },
    secret : process.env.NEXTAUTH_SECRET,
  }

  export default authOptions