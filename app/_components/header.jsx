"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Playfair_Display, Roboto, Poppins } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '600' });

export default function Navbar() {
  const pathname = usePathname();
  const hiddenRoutes = ["/sign-in", "/sign-up", "/admin"];
  const isHidden = hiddenRoutes.some((route) => pathname?.startsWith(route));
  if (isHidden) return null;

  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll shrink state
  const [isShrunk, setIsShrunk] = useState(false);
  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsShrunk(window.scrollY > 10); // 0.5 saniye bekledikten sonra küçül
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl"> {/** gray-900/60 */}
      <motion.nav
        className="relative bg-gray-900/20 backdrop-blur-md border rounded-2xl shadow-lg overflow-hidden"
        animate={{
          borderColor: [
            "rgba(255,215,0, 0.3)",
          ],
          scale: isShrunk ? 0.9 : 1,
          y: isShrunk ? -10 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          borderColor: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
      >
        {/* Glow efekti */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255,215,0, 0.2)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* İçerik */}
        <div className="relative z-10 px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className='flex items-center space-x-3 text-white'>
              {/* <Image src="/motion-records-logo.png" alt="Motion Records LLC" width={120} height={40} className="h-8 w-auto brightness-0 invert"/> */}
              <h1 className={playfair.className}>Sapore</h1>
            </Link>

            {/* Masaüstü menü */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="/AboutUs" className="text-sm text-gray-300 hover:text-orange-400">About Us</Link>
                <Link href="/Menu" className="text-sm text-gray-300 hover:text-orange-400">Menu</Link>
                <Link href="/" className="text-sm text-gray-300 hover:text-orange-400">Events</Link>
                <Link href="/Contact" className="text-sm text-gray-300 hover:text-orange-400">Contact / Social Media</Link>
                <Link href="/Report" className="text-sm text-gray-300 hover:text-orange-400">Report</Link>
              </div>
            </div>

            {/* Sağ taraf */}
            <div className="flex items-center space-x-4">
              {isSignedIn ? (
                <UserButton />
              ) : (
                <div className="hidden md:flex items-center space-x-4">
                  <SignInButton mode="modal">
                    <Button variant="ghost" className="text-sm text-gray-300">Sign In</Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button size="sm" className="bg-white text-black hover:bg-gray-100">Sign Up</Button>
                  </SignUpButton>
                </div>
              )}
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-5 w-5 text-gray-300" /> : <Menu className="h-5 w-5 text-gray-300" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobil menü */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }} // yumuşak easing
              className="md:hidden border-t border-gray-700/50 bg-gray-900/20 backdrop-blur-md rounded-b-2xl overflow-hidden"
            >
              <div className="px-6 py-4 space-y-3">
                <Link href="/AboutUs" className="block text-gray-300 hover:text-blue-400">
                  About Us
                </Link>
                <Link href="/Menu" className="block text-gray-300 hover:text-pink-400">
                  Menu
                </Link>
                <Link href="/Events" className="block text-gray-300 hover:text-purple-400">
                  Events
                </Link>
                <Link href="/Contact" className="block text-gray-300 hover:text-green-400">
                  Contact / Social Media
                </Link>
                <Link href="/Report" className="block text-gray-300 hover:text-orange-400">
                  Report
                </Link>
                <div className="pt-3 border-t border-gray-700">
                  {isSignedIn ? (
                    <UserButton />
                  ) : (
                    <div className="flex flex-col gap-2">
                      <SignInButton mode="modal">
                        <Button
                          variant="ghost"
                          className="w-full text-gray-300 hover:bg-gray-700"
                        >
                          Sign In
                        </Button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <Button
                          size="sm"
                          className="w-full bg-white text-black hover:bg-gray-100"
                        >
                          Sign Up
                        </Button>
                      </SignUpButton>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
