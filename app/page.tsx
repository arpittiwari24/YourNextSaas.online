
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";
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
    <Pricing />
    <Footer />
    </>
  );
}
