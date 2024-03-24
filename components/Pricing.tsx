'use client'

import axios from "axios"

// import { useSession } from "next-auth/react"

const Pricing = () => {

 const Yearly = process.env.YEARLY_VARIANT_ID

  const Monthly = process.env.MONTHLY_VARIANT_ID

  // const {data: session} = useSession()
  // const email = session?.user?.email

  const handleClickYearly = async () => {
    try {
      const response = await axios.post("/api/purchase",{
        productId: Yearly
      })      
      console.log(response.data)
  
      window.open(response.data.checkoutUrl,"_blank")
      } catch (error) {
        console.log(error)
        alert("Error while processing payments, try again in a few seconds")
      }
  }

  const handleClickMonthly = async () => {
    try {
      const response = await axios.post("/api/purchase",{
        productId: Monthly
      })      
      console.log(response.data)
  
      window.open(response.data.checkoutUrl,"_blank")
      } catch (error) {
        console.log(error)
        alert("Error while processing payments, try again in a few seconds")
      }
  }
  return (
    <>
    <div className="max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-20 mx-auto">

<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Pricing</h2>
  <p className="mt-1  ">Whatever your status, our offers evolve according to your needs.</p>
</div>




<div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">

  <div className="flex flex-col border border-white text-center rounded-xl p-8 ">
    <h4 className="font-medium text-lg  ">Free</h4>
    <span className="mt-7 font-bold text-5xl  ">Free</span>

    <ul className="mt-7 space-y-2.5 text-sm">
      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          2 Projects
        </span>
      </li>

      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          10 urls inside projects
        </span>
      </li>

      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          Analytics (only clicks)
        </span>
      </li>
    </ul>

    <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-200 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
      Sign up
    </a>
  </div>



  <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 ">
    <p className="mb-3"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800  ">Most popular</span></p>
    <h4 className="font-medium text-lg  ">Monthly</h4>
    <span className="mt-5 font-bold text-5xl  ">
      <span className="font-bold text-2xl ">$</span>
      5
    </span>
    

    <ul className="mt-7 space-y-2.5 text-sm">
      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          Unlimited Projects
        </span>
      </li>

      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
         Unlimited Urls
        </span>
      </li>

      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          Complete Analytics
        </span>
      </li>
    </ul>

    <button className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" 
    onClick={handleClickMonthly}
    >
      Sign up
    </button>
  </div>

  <div className="flex flex-col border border-white text-center rounded-xl p-8 ">
    <h4 className="font-medium text-lg  ">Annual</h4>
    <span className="mt-5 font-bold text-5xl  ">
      <span className="font-bold text-2xl ">$</span>
      30
    </span>

    <ul className="mt-7 space-y-2.5 text-sm">
      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          Same as monthly plan
        </span>
      </li>

      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          Cost Saving <span className=" line-through">$60  </span> $30
        </span>
      </li>

      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          No monthly payment hassle 
        </span>
      </li>
    </ul>

    <button className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-200 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
    onClick={handleClickYearly}
    >
      Sign up
    </button>
  </div>

</div>
</div>
</>
  )
}

export default Pricing

