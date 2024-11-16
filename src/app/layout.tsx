import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap',
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Same Day Ramps - Wheelchair Ramp Rentals & Installation",
    template: "%s | Same Day Ramps"
  },
  description: "Professional wheelchair ramp rentals and installation services. Quick setup, flexible rental periods, and ADA-compliant solutions for your accessibility needs.",
  keywords: ["wheelchair ramp", "ramp rental", "accessibility solutions", "ADA compliant", "temporary ramp"],
  authors: [{ name: "Same Day Ramps" }],
  creator: "Same Day Ramps",
  publisher: "Same Day Ramps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html 
      lang="en" 
      data-theme="mytheme"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
