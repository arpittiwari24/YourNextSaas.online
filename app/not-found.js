// app/not-found.js
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/">
        <a className="mt-6 text-blue-500 hover:underline text-lg">
          Go back to Home
        </a>
      </Link>
    </div>
  );
}
