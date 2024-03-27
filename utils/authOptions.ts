import { SupabaseAdapter } from "@auth/supabase-adapter";
import { Session } from "next-auth";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      }),
    ],
    adapter: SupabaseAdapter({
      url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
      secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY ?? "",
    }) as Adapter,
    callbacks : {
      async jwt({token,trigger, session}: {token: string, trigger: string, session: Session }) {
        return token
      }
    },
    session : {
      strategy: "jwt"
    }
  }

  export default authOptions