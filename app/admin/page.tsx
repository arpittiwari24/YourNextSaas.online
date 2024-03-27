'use client'

import Loading from "@/components/Loading"
import supabaseClient from "@/utils/supabase-connect"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function Admin() {
    const {data : session} = useSession()
    const email = session?.user?.email
    const [loading,setLoading] = useState<boolean>(false)
    const [admin,setAdmin] = useState<boolean>(false)

    useEffect(() => {
        const fetch = async() => {
            setLoading(true)
            try {
              if(email !== undefined) {
                const {data} = await supabaseClient.from("users").select("role").eq("email",email)
                if(data && data[0].role !== undefined) {
                 if(data[0].role === "admin") {
                     setAdmin(true)
                 } else {
                     setAdmin(false)
                    }
                } 
                 console.log(data);
                 setLoading(false)
              }
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }   
        const timeout = setTimeout(() => {
            fetch()
        },500)
        return () => clearTimeout(timeout)
    },[])

        return (
            <>
          {loading &&   <Loading />}
          {admin ? (
            <p>Welcome admin bhai</p>
          ) : (
            <img src="" alt="img for not admin" />
          )}
            </>
    )
    
}