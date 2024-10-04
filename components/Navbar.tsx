"use client";
import supabaseClient from "@/utils/supabase-connect";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import ThemeToggle from "./theme/theme-toggle";

const Navbar = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  console.log(session);
  const [active, setActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const fetchData = async () => {
  //   try {
  //     const { data: user } = await supabaseClient.from("users").select("active").eq("email", email);
  //     if (user !== null && user[0].active === true) {
  //       setActive(true);
  //       setLoading(false);
  //     } else {
  //       setActive(false);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [email]);

  return (
    <div className="">
      <nav className="fixed  w-full bg-white/50 dark:bg-black/70 backdrop-blur-3xl z-10 rounded-md">
        <div className="navbar">
          <div className="navbar-start lg:pl-32">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
              </ul>
            </div>
            <h1 className="text-xl md:text-2xl font-semibold">YourNextSaas</h1>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 md:text-lg">
              <li>
                <a className="link link-hover">Features</a>
              </li>
              <li>
                <a className="link link-hover" href="#pricing">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-end flex items-center space-x-4 lg:pr-40">
            {session ? (
              <button
                onClick={async () => await signOut()}
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={async () => await signIn("google")}
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4"
              >
                Sign Up
              </button>
            )}

            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
