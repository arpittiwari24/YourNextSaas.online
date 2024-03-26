'use client'

import { signOut} from "next-auth/react"

const Page =  () => {

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
