'use client'
import authOptions from "@/utils/authOptions"
import { getServerSession } from "next-auth"
import { signOut, useSession} from "next-auth/react"
import { redirect } from "next/navigation"

const Page =  () => {
  const {data: session} =  useSession()
  if(!session) {
    redirect("/")
  }
  return (
    <div>
      signded innd
      <button 
      onClick={() => {
        signOut()
      }}
      >
        Sign Out</button>
    </div>
  )
}

export default Page
