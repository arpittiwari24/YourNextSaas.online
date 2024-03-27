'use client'
import { useEffect, useState } from "react"
import Loading from "./Loading"
import supabaseClient from "@/utils/supabase-connect"
import { useSession } from "next-auth/react"


const Dashboard = () => {
  const { data: session } = useSession()
  const email = session?.user?.email
  const [active, setActive] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true) // Set loading to true initially

  const fetchData = async () => {
    try {
      const { data: user } = await supabaseClient.from("users").select("active").eq("email", email)
      if (user !== null && user[0].active === true) {
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

  useEffect(() => {
    fetchData()
  }, [email]) // Fetch data whenever email changes

  if (loading) {
    return <Loading /> // or any other loading indicator
  }

  return (
    <div>
       {active ? (
        JSON.stringify(active)
      ) : (
        <>Free</>
      )}
    </div>
  )
}

export default Dashboard
