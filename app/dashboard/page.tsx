'use client'

import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

const Page = () => {
    const {data: session} = useSession()
    const [loading, setLoading] = useState<boolean>(false)
    if(loading) {
        return (
            <p>Loading...</p>
        )
    }
    useEffect(() => {
        const fetch = () => {
            setLoading(true)
            if(!session) {
                redirect("/")
            }
            setLoading(false)
        }
        fetch()
    },[session])
  return (
    <div>
      signded innd
      <button onClick={() => {
        signOut()
      }}>Sign Out</button>
    </div>
  )
}

export default Page
