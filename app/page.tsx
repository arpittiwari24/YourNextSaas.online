
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import supabaseClient from "@/utils/supabase-connect";
import { getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions)
  if(session) {
    redirect("/dashboard")
  }

  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    {JSON.stringify(data)}
    <Pricing />
    <Footer />
    </>
  );
}
