import { Geist, Geist_Mono } from "next/font/google";
import Provider from '@/app/Provider'
import { Metadata } from 'next';
import Header from '@/app/_components/header'
import "./globals.css";
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, } from '@clerk/nextjs';
import { Suspense } from 'react';
import HeaderSection from "./_components/HeaderSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Cafe Sapore',
  description: 'Generated with Professionalism',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="light">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Suspense>
            <Provider>
              <HeaderSection lang="en" />
              {children}
            </Provider>
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  )
}