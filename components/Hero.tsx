"use client";

import { signIn } from "next-auth/react";
import "./hero.css";
import Image from "next/image";
import Magnet from "./ui/MaganaticButton";
import { Tiles } from "./ui/TilesComponents";
import { Lights } from "./ui/Bg-light";

const Hero = () => {
  return (
    <div className="relative hero md:py-2   ">
      {/* Background gradient blur blob */}

      <div className="hero-content flex-col lg:flex-row-reverse items-center bg-grid-white/[0.03] mt-20">
        <Image
          width={500}
          height={500}
          src="/hitesh-sir.png"
          alt="Hitesh Sir"
          className="rounded-full py-2 h-96"
        />
        <div className="lg:mr-10 text-center lg:text-left">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold py-1">
            Build with a smile {":)"}
            <br />
            The foundation for your{" "}
            <span className="next-sass text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text lg:py-1">
              Next Saas
            </span>
          </h1>
          <p className="py-6 pb-8 text-lg text-gray-600 dark:text-gray-300">
            Boost your speed while building your next SaaS with our open-source
            boilerplate. Focus on building new features rather than setting up
            payments and authentication.
          </p>
          <Magnet padding={50} disabled={false}>
            <button
              onClick={() => signIn("google")}
              className="inline-flex justify-center items-center gap-x-3 bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
              Continue with Google
            </button>
          </Magnet>
        </div>
      </div>

      <Lights />
    </div>
  );
};

export default Hero;
