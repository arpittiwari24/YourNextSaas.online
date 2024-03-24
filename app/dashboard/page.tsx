'use client'

import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

const Page = () => {
    const {data: session} = useSession()
  
    useEffect(() => {
        const fetch = () => {
            if(!session) {
                redirect("/")
            }
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
