"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Regular Customer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    quote:
      "I've been coming to Glow Salon for over a year now, and I'm always impressed with their hair coloring services. The stylists understand exactly what I want!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohan Mehta",
    role: "First-time Customer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    quote:
      "Best haircut ever! The stylist took time to understand what I wanted and gave great suggestions. Will definitely be coming back.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Regular Customer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    quote:
      "Loved the nail art! The technicians are so creative and detail-oriented. My nails have never looked better.",
    rating: 4,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Monthly Customer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&auto=format&q=60",
    quote:
      "As a man who cares about grooming, I appreciate that this salon caters to both men and women. Great beard trimming and facial services!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobileView(window.innerWidth < 640)

      const handleResize = () => {
        setIsMobileView(window.innerWidth < 640)
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay && !isMobileView) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, isMobileView])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const renderTestimonials = () => {
    if (isMobileView) {
      return (
        <div className="grid grid-cols-2 gap-3">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="animate-fadeInUp" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <div className="salon-card p-3 shadow-salon hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="flex flex-col items-center mb-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mb-2 border-2 border-primary/50 hover:scale-105 transition-transform duration-300">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-sm">{testimonial.name}</h3>
                    <p className="text-gray-600 text-xs">{testimonial.role}</p>
                    <div className="flex justify-center text-secondary mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 transition-all duration-300 ${i < testimonial.rating ? "animate-pulse" : ""}`}
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative flex-grow">
                  <blockquote className="text-gray-700 italic text-xs">{testimonial.quote.length > 70 ? `${testimonial.quote.substring(0, 70)}...` : testimonial.quote}</blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }

    return (
      <>
        <div className="overflow-hidden">
          <div
            className="flex transition-all duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="salon-card p-8 shadow-salon hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-4 border-2 border-primary/50 hover:scale-105 transition-transform duration-300">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <div className="flex text-secondary mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 transition-all duration-300 ${i < testimonial.rating ? "animate-pulse" : ""}`}
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-5xl text-primary opacity-20">"</div>
                    <blockquote className="text-gray-700 italic relative z-10 pl-4">{testimonial.quote}</blockquote>
                    <div className="absolute -bottom-4 -right-2 text-5xl text-primary opacity-20">"</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 hover:scale-110 active:scale-95 transition-all duration-300 z-20"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 hover:scale-110 active:scale-95 transition-all duration-300 z-20"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="flex justify-center mt-6 space-x-2 animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary scale-125" : "bg-gray-300"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </>
    )
  }

  return (
    <section className="salon-section bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden animate-fadeIn">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 animate-float">
        <div className="absolute inset-0 bg-salon-pattern"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="salon-section-title animate-fadeInDown mb-8">
          <h2 className="heading-lg pb-5 flex justify-center">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experiences at Glow Unisex
            Salon.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-scaleIn">
          {renderTestimonials()}
        </div>
      </div>
    </section>
  )
}
