"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Calendar, Sparkles } from "lucide-react"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [typingComplete, setTypingComplete] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const fullText = "Radiant Beauty"

  // Image slideshow for background
  const backgroundImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop&crop=focalpoint&auto=format&q=80",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&h=1080&fit=crop&crop=focalpoint&auto=format&q=80",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1920&h=1080&fit=crop&crop=focalpoint&auto=format&q=80"
  ]

  // Typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      setTypingComplete(true)
    }
  }, [typedText])

  // Background image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  // Smooth scroll function
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    })
  }

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Images Slideshow */}
      {backgroundImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={src}
            alt={`Luxurious salon interior ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] animate-float"
          style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Promotional Badge */}
        <div className="absolute -top-6 right-10 md:top-4 md:right-20 transform rotate-6 animate-bounce"
          style={{ animationDuration: "3s" }}>
          <div className="bg-gradient-to-r from-purple-600/70 to-pink-500/70 backdrop-blur-md text-white text-xs md:text-sm font-bold px-6 py-2 rounded-full shadow-lg shadow-pink-500/30 border border-white/20">
            <span className="flex items-center"><Sparkles className="w-4 h-4 mr-1.5" /> 25% OFF First Visit</span>
          </div>
        </div>

        <div className="max-w-4xl text-white">
          <div className="inline-block mb-5 text-sm md:text-base bg-gradient-to-r from-purple-600/30 to-pink-500/30 backdrop-blur-sm px-5 py-2 rounded-full animate-fadeInDown border border-purple-500/20 shadow-sm shadow-purple-500/10">
            <span className="animate-pulse mr-2">✨</span> Premium Unisex Salon Experience
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-tight tracking-tight animate-fadeInDown">
            Discover Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 relative">
              {typedText}
              <span className={`absolute right-0 top-0 h-full w-1 bg-white ${typingComplete ? 'animate-pulse' : ''}`}
                style={{ opacity: typingComplete ? 1 : 0 }}></span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-gray-100 leading-relaxed max-w-3xl animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Indulge in premium beauty services tailored for you. Where style meets excellence and confidence is born.
          </p>

          <div className="flex flex-wrap gap-5 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg px-8 py-7 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 relative overflow-hidden group bg-gradient-to-r from-purple-600 to-pink-500 rounded-full border-0"
            >
              <Link href="/booking" className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="relative z-10">Book Your Experience</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base md:text-lg px-8 py-7 text-white border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 group bg-black/20 backdrop-blur-sm hover:text-white rounded-full"
            >
              <Link href="/services" className="flex items-center">
                Explore Our Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </Button>
          </div>

          {/* Enhanced Social Proof */}
          <div className="mt-16 flex flex-col md:flex-row md:items-center md:space-x-8 space-y-6 md:space-y-0 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full border-2 border-white/80 overflow-hidden hover:scale-110 hover:z-10 transition-transform duration-300 shadow-lg"
                    style={{ zIndex: 5 - i }}
                  >
                    <Image
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i + 60}.jpg`}
                      alt={`Happy customer ${i}`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-5">
                <div className="text-yellow-400 flex text-2xl">{"★★★★★"}</div>
                <p className="text-sm text-gray-300">Trusted by 10,000+ happy clients</p>
              </div>
            </div>

            <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 shadow-lg">
              <div className="mr-4 text-2xl animate-pulse">🏆</div>
              <div>
                <p className="text-xs text-gray-300 uppercase tracking-wide">AWARD WINNING</p>
                <p className="text-sm font-semibold">Best Salon 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce cursor-pointer z-10 group"
        style={{ animationDuration: "2s" }}
      >
        <span className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">Scroll</span>
        <div className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-all">
          <ChevronDown className="h-6 w-6" />
        </div>
      </button>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
