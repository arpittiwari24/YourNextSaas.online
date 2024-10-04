'use client'

import axios from "axios"
import React, { useState } from "react"
import toast from "react-hot-toast"

const Contact = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [details, setDetails] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

         //  validation
         if (!name || !email || !details) {
          toast.error("All fields are required")
          return
      }
         
        const formData = {
            name, email, details
        }
        try {
            const response = await axios.post("/api/contact",formData)
            if(response.status == 201) {
                setName("")
                setEmail("")
                setDetails("")
                toast.success("Message sent successfully")
            }
        } catch (error) {
            console.log(error)
            toast.error("Message failed to send")
        }
    }

  return (
    <>
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

    <div className="grid md:grid-cols-2 items-center gap-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight dark:text-white">
          Have Something to share?
        </h1>
        <p className="mt-1 md:text-lg text-gray-800 dark:text-gray-200">
          Fell free to write to us and we will get back as soon as possible .
        </p>
        </div>
    

      <div className="relative">

        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Fill in the form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-6 grid gap-4 lg:gap-6">
 
              <div className="">
                <div>
                  <label
                    htmlFor="hs-firstname-hire-us-1"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                     Name
                  </label>
                  <input
                    type="text"
                    name="hs-firstname-hire-us-1"
                    id="hs-firstname-hire-us-1"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  />
                </div>
              </div>
       
              <div>
                <label
                  htmlFor="hs-work-email-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                   Email
                </label>
                <input
                  type="email"
                  name="hs-work-email-hire-us-1"
                  id="hs-work-email-hire-us-1"
                  autoComplete="email"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
              </div>
             
       
              <div>
                <label
                  htmlFor="hs-about-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Details
                </label>
                <textarea
                  id="hs-about-hire-us-1"
                  name="hs-about-hire-us-1"
                  rows={4}
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  defaultValue={""}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDetails(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-6 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Send inquiry
              </button>
            </div>
          </form>
        </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  {/* End Hire Us */}
</>

  )
}

export default Contact
