'use client'

import supabaseClient from "@/utils/supabase-connect"
import { signOut, useSession} from "next-auth/react"

const Page = async () => {

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault()
    signOut()
  }
  const {data: session} = useSession()
  const email = session?.user?.email
  
    const {data} = await supabaseClient.from("users").select("id").eq("email",email)

  return (
    <div>
      signded innd
      <button 
      onClick={handleClick}
      >
        Sign Out</button>
        {JSON.stringify(data)}
    </div>
  )
}

export default Page
