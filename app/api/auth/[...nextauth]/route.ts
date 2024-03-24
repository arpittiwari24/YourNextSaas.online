import authOptions from "@/utils/authOptions";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };