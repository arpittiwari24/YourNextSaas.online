'use client'
import Dashboard from "@/components/Dashboard"
import Loading from "@/components/Loading"
import Navbar from "@/components/Navbar"
import supabaseClient from "@/utils/supabase-connect"
import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

const Page = () => {
  const { data: session } = useSession()
  const email = session?.user?.email

  return (
    <div>
      <Navbar />
      {/* <Dashboard /> */}
    </div>
  )
}

export default Page

