import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";

const Custom404: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 p-4">
        <h1 className="text-8xl sm:text-9xl font-extrabold text-white">
          404
        </h1>

        <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-4xl sm:text-5xl font-extrabold py-1 text-center mt-4">
          Oops! Page not found
        </h2>
        
        <h3 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-xl sm:text-2xl font-semibold mt-4 text-center">
          The page you're looking for doesn't exist.
        </h3>

        <Link href="/">
          <button className="mt-8 inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-black py-2 px-4 sm:py-3 sm:px-6">
            Go Back Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Custom404;
