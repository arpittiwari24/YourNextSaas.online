'use client'
import Navbar from "@/components/Navbar"
import { useEffect } from "react"

const Page = () => {
  const handleEmail = async () => {
    const data = fetch("/api/email")
  if((await data).status === 200) {
    console.log("successfull")
  } else {
    console.log("Unsuccessfull")
  }
  }

  useEffect(() => {
    handleEmail()
  },[])

  return (
    <div>
      <Navbar />
      {/* <Dashboard /> */}
    </div>
  )
}

export default Page
