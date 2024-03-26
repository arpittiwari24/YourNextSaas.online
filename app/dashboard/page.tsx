'use client'

import Loading from "@/components/Loading"
import supabaseClient from "@/utils/supabase-connect"
import { signOut, useSession} from "next-auth/react"
import { useEffect, useState } from "react"

const Page = async () => {
  const {data: session} = useSession()
  const email = session?.user?.email
  const [active, setActive] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault()
    const {data, error} = await supabaseClient.from("users").update({active: true}).eq("email",email)
    if(error) throw error
    console.log((data));
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
    try {
      const {data: user} = await supabaseClient.from("users").select("active").eq("email",email)
      if(user !== null  && user[0].active === true) {
        setActive(true)
        setLoading(false)
      } else {
        setActive(false)
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
    }
    fetchData()
  })

  return (
    <div>
      signded innd
      <button 
      onClick={handleClick}
      >
        Sign Out</button>
        {loading && <span className="loading loading-ring loading-lg"></span>}
        {active ? (
           JSON.stringify(active)
        ): (
          <></>
        )}
       
    </div>
  )
}

export default Page
