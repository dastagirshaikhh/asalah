"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Satisfy } from "next/font/google";

const satisfy = Satisfy({ weight: ["400"], subsets: ["latin"] });


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={`text-4xl font-bold tracking-tighter text-primary ${satisfy.className}`}>
          Asalah
        </Link>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </Button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white md:hidden shadow-md"
            >
              <ul className="flex flex-col space-y-4 p-4">
                {[
                  { href: "#vision", label: "Vision" },
                  { href: "#services", label: "Services" },
                  { href: "#about", label: "About" },
                  { href: "#contact", label: "Contact" },
                ].map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link href={item.href} className="hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
        <nav className="hidden md:block">
          <ul className="flex flex-row space-x-8">
            <li>
              <Link href="#vision" className="hover:text-primary transition-colors">
                Vision
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button asChild className="hidden md:block rounded-xl">
          <Link href="#contact">Get Started</Link>
        </Button>
      </div>
    </header>
  );
}