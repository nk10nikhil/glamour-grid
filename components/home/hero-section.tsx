"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

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
          className={`absolute inset-0 z-0 transition-opacity duration-500 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
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

      {/* Video Background Option (uncomment to use) */}
      {/* <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/your-salon-video.mp4" type="video/mp4" />
        </video>
      </div> */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-secondary/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary/20 rounded-full blur-lg animate-float"
          style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Promotional Badge */}
        <div className="absolute -top-6 right-10 md:top-0 md:right-20 transform rotate-12 animate-bounce"
          style={{ animationDuration: "3s" }}>
          <div className="bg-secondary/50 backdrop-blur-md text-black text-xs md:text-sm font-bold px-4 py-1 rounded-full shadow-lg border border-white/30">
            <span className="animate-pulse text-glow">25% OFF First Visit</span>
          </div>
        </div>

        <div className="max-w-3xl text-white">
          <div className="inline-block mb-3 text-sm md:text-base bg-primary/30 backdrop-blur-sm px-4 py-1 rounded-full animate-fadeInDown">
            <span className="animate-pulse">✨</span> Premium Salon Experience
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-fadeInDown">
            Discover Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative">
              {typedText}
              <span className={`absolute right-0 top-0 h-full w-1 bg-white ${typingComplete ? 'animate-pulse' : ''}`}
                style={{ opacity: typingComplete ? 1 : 0 }}></span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Indulge in premium beauty services tailored for you. Where style meets excellence and confidence is born.
          </p>

          <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 transition-all duration-500 hover:scale-105 hover:shadow-lg relative overflow-hidden group bg-gradient-to-r from-primary to-primary-dark"
            >
              <Link href="/booking">
                <span className="relative z-10">Book Your Experience</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 text-white border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 group bg-gray-700/20 hover:text-white"
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
          <div className="mt-12 flex flex-col md:flex-row items-start md:items-center md:space-x-8 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden hover:scale-110 hover:z-10 transition-transform duration-300 shadow-lg"
                    style={{ animationDelay: `${0.2 * i}s`, transform: `translateX(${(i - 3) * 5}px)` }}
                  >
                    <Image
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i + 60}.jpg`}
                      alt={`Happy customer ${i}`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="text-yellow-400 flex text-2xl">{"★★★★★"}</div>
                <p className="text-sm text-gray-300">Trusted by 10,000+ happy clients</p>
              </div>
            </div>

            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="mr-3 text-2xl animate-pulse">🏆</div>
              <div>
                <p className="text-xs text-gray-300">AWARD WINNING</p>
                <p className="text-sm font-semibold">Best Salon 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce cursor-pointer z-10"
        style={{ animationDuration: "2s" }}
      >
        <span className="text-sm mb-2">Scroll</span>
        <ChevronDown className="h-6 w-6" />
      </button>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
