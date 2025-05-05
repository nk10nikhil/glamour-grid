"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Calendar } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 animate-fadeInDown"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 transition-all duration-300 hover:scale-105 group"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=100&h=100&fit=crop&crop=faces&auto=format&q=60"
                alt="GlamourGrid"
                width={48}
                height={48}
                className="rounded-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-90 group-hover:opacity-100'}`}>
              GlamourGrid
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 transform ${pathname === item.href
                    ? "text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-md"
                    : isScrolled
                      ? "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500"
                      : "text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500"
                  }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="ml-8 relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md hover:shadow-lg rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="relative z-10 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <Link href="/booking">Book Now</Link>
                <span className="sr-only">Book an appointment</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </nav>

          <Button
            size="icon"
            className={`lg:hidden bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-md transition-all duration-300 rounded-full w-12 h-12 flex items-center justify-center ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/98 backdrop-blur-md rounded-2xl shadow-xl p-5 animate-fadeInDown border border-gray-100">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-5 py-3 rounded-xl text-base font-medium transition-all duration-300 ${pathname === item.href
                      ? "text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-sm"
                      : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500"
                    }`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white shadow-md hover:shadow-lg rounded-xl py-3 transition-all duration-300"
              >
                <Link
                  href="/booking"
                  className="flex items-center justify-center group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Book Appointment</span>
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
