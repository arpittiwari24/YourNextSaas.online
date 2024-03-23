"use client"
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import axios from "axios";


export default function Home() {

  const handlePayment = async () => {
    
    try {
    const response = await axios.post("/api/purchase",{
      productId: "308195"
    })      
    console.log(response.data)

    window.open(response.data.checkoutUrl,"_blank")
    } catch (error) {
      console.log(error)
      alert("Error while processing payments, try again in a few seconds")
    }
  }
  
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Pricing />
    <button className="btn btn-success" onClick={handlePayment}>
      But the product
    </button>
    <Footer />
    </>
  );
}
