'use client'
import { signIn, signOut} from "next-auth/react"

const Navbar = async () => {

  return (
   <div className="navbar">
  <div className="navbar-start lg:pl-16">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
      </ul>
    </div>
    <h1 className="text-xl md:text-2xl font-semibold">YourNextSass</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 md:text-lg">
      <li><a className="link link-hover">Features</a></li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
      <li><a className="link link-hover" href="#pricing">Pricing</a></li>
    </ul>
  </div>
  <div className="navbar-end lg:pr-10">
    <button onClick={() => signIn("google")} className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 ">
          Sign Up
        </button>
  </div>
</div> 
  )
}

export default Navbar