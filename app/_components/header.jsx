"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Playfair_Display, Roboto, Poppins, Noto_Serif_Georgian, Amiri } from 'next/font/google';
import { getTranslations, isRtl } from '@/lib/i18n';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '700' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '600' });
const notoGeorgian = Noto_Serif_Georgian({ subsets: ['georgian'], weight: '400' });
const amiri = Amiri({ subsets: ['arabic'], weight: '400' });

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || 'en';
  const t = getTranslations(lang);
  const hiddenRoutes = ["/sign-in", "/sign-up", "/admin"];
  const isHidden = hiddenRoutes.some((route) => pathname?.startsWith(route));
  if (isHidden) return null;

  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsShrunk(window.scrollY > 10);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  const changeLanguage = (newLang) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLang);
    router.push(`${pathname}?${params.toString()}`);
    setIsMenuOpen(false);
  };

  const getFontClass = () => {
    if (lang === 'ka') return notoGeorgian.className;
    if (lang === 'ar') return amiri.className;
    return roboto.className;
  };

  return (
    <header className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl ${getFontClass()}`} dir={isRtl(lang) ? 'rtl' : 'ltr'}>
      <motion.nav
        className="relative bg-gray-900/20 backdrop-blur-md border rounded-2xl shadow-lg overflow-hidden"
        animate={{
          borderColor: ["rgba(255,215,0, 0.3)"],
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
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: ["0 0 20px rgba(255,215,0, 0.2)"],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <div className="relative z-10 px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 text-white">
              <h1 className={playfair.className}>Sapore</h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/AboutUs" className="text-sm text-gray-300 hover:text-orange-400">{t.nav?.aboutUs || 'About Us'}</Link>
              <Link href="/Menu" className="text-sm text-gray-300 hover:text-orange-400">{t.nav?.menu || 'Menu'}</Link>
              <Link href="/" className="text-sm text-gray-300 hover:text-orange-400">{t.nav?.events || 'Events'}</Link>
              <Link href="/Contact" className="text-sm text-gray-300 hover:text-orange-400">{t.nav?.contact || 'Contact / Social Media'}</Link>
              <Link href="/Report" className="text-sm text-gray-300 hover:text-orange-400">{t.nav?.report || 'Report'}</Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                {['en', 'tr', 'ka', 'ru', 'ar'].map(langCode => (
                  <span
                    key={langCode}
                    onClick={() => changeLanguage(langCode)}
                    className={`${roboto.className} text-sm px-2 py-1 rounded-md border border-amber-500/30 cursor-pointer transition-colors duration-200 ${lang === langCode ? 'text-orange-400 bg-gray-700/50' : 'text-gray-300 hover:text-orange-400 hover:bg-gray-700/50'}`}
                  >
                    {langCode.toUpperCase()}
                  </span>
                ))}
              </div>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <div className="hidden md:flex items-center space-x-4">
                  <SignInButton mode="modal">
                    <Button variant="ghost" className="text-sm text-gray-300">{t.nav?.signIn || 'Sign In'}</Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button size="sm" className="bg-white text-black hover:bg-gray-100">{t.nav?.signUp || 'Sign Up'}</Button>
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
              className="md:hidden border-t border-gray-700/50 bg-gray-900/20 backdrop-blur-md rounded-b-2xl overflow-hidden"
            >
              <div className="px-6 py-4 space-y-3">
                <Link href="/AboutUs" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-blue-400">
                  {t.nav?.aboutUs || 'About Us'}
                </Link>
                <Link href="/Menu" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-pink-400">
                  {t.nav?.menu || 'Menu'}
                </Link>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-purple-400">
                  {t.nav?.events || 'Events'}
                </Link>
                <Link href="/Contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-green-400">
                  {t.nav?.contact || 'Contact / Social Media'}
                </Link>
                <Link href="/Report" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-orange-400">
                  {t.nav?.report || 'Report'}
                </Link>
                <div className="pt-3 border-t border-gray-700">
                  <div className="flex flex-wrap mb-3 justify-between"> {/* gap-3 */}
                    {['en', 'tr', 'ka', 'ru', 'ar'].map(langCode => (
                      <span
                        key={langCode}
                        onClick={() => changeLanguage(langCode)}
                        className={`${roboto.className} block text-sm px-3 py-2 rounded-md border border-amber-500/30 cursor-pointer transition-colors duration-200 ${lang === langCode ? 'text-orange-400 bg-gray-700/50' : 'text-gray-300 hover:text-orange-400 hover:bg-gray-700/50'}`}
                      >
                        {langCode.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  {isSignedIn ? (
                    <UserButton />
                  ) : (
                    <div className="flex flex-col gap-2 border-t border-gray-700">
                      <SignInButton mode="modal">
                        <Button
                          variant="ghost"
                          className="w-full text-gray-300 hover:bg-gray-700"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t.nav?.signIn || 'Sign In'}
                        </Button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <Button
                          size="sm"
                          className="w-full bg-white text-black hover:bg-gray-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t.nav?.signUp || 'Sign Up'}
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