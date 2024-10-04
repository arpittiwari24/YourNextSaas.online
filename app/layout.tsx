import type { Metadata } from "next";
import { Comic_Neue, Inter, Open_Sans, Saira } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";
import PlausibleProvider from "next-plausible";

const sans = Open_Sans({ subsets: ["latin"] });

// Fallback URL logic
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yournextsass-demo.vercel.app/';

export const metadata: Metadata = {
  title: "Your Next SaaS",
  description: "Boost your speed while building your next SaaS with our open-sourced boilerplate. Spend your time building new features without worrying about payments, authentication, mailing, blogs, admin access, and SEO.",
  keywords: "SaaS, Next.js, payments, authentication, mailing, blogs, admin access, SEO, open-source, web development",
  openGraph: {
    title: "Your Next SaaS",
    description: "Accelerate your SaaS development with our open-source boilerplate, featuring built-in solutions for payments, authentication, mailing, and more.",
    url: `${baseUrl}`,
    siteName: "Your Next SaaS",
    images: [
      {
        url: `${baseUrl}/public/logo.png`,  
        width: 1200,
        height: 630,
        alt: "Your Next SaaS Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",  
    title: "Your Next SaaS",
    description: "Open-source Next.js boilerplate for rapid SaaS development with pre-built solutions.",
    images: [`${baseUrl}/public/og-image.png`],  
  },
  alternates: {
    canonical: `${baseUrl}`, 
  },
  other: {
    "application-name": "Your Next SaaS",
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml", 
    "theme-color": "#ffffff",  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <script defer data-domain="" src="https://plausible.io/js/script.js"></script> */}
      <head>
        <PlausibleProvider domain="yournextsass.vercel.app" taggedEvents={true} />
      </head>
      <body className={sans.className}>
        <Toaster position="top-center" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
