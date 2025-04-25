import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, IndianRupee } from "lucide-react"

interface ServiceProps {
  service: {
    id: string
    name: string
    description: string
    price: number
    duration: string
    image: string
  }
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceProps) {
  return (
    <div
      className="salon-card overflow-hidden shadow-salon hover:shadow-salon-hover transition-all duration-500 group hover:translate-y-[-5px] animate-fadeInUp"
      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
    >
      <div className="relative h-32 sm:h-48 overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-primary/90 text-white text-[10px] sm:text-xs py-1 px-2 rounded-full shadow-md transform rotate-3 animate-pulse">
          Popular
        </div>
      </div>

      <div className="p-3 sm:p-6 relative">
        <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">{service.name}</h3>
        <p className="text-gray-600 text-xs sm:text-base mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3">{service.description}</p>

        <div className="flex justify-between items-center mb-2 sm:mb-4">
          <div className="flex items-center text-primary font-semibold text-xs sm:text-base group-hover:scale-110 transition-transform duration-300">
            <IndianRupee className="h-3 w-3 sm:h-4 sm:w-4 mr-0.5 sm:mr-1" />
            <span>{service.price}</span>
          </div>

          <div className="flex items-center text-gray-500 text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-0.5 sm:mr-1 group-hover:animate-spin-slow" />
            <span>{service.duration}</span>
          </div>
        </div>

        <Button
          asChild
          size="sm"
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg rounded-full shadow-md transition-all duration-500 hover:scale-105 text-xs sm:text-base py-1 sm:py-2"
        >
          <Link href={`/booking?service=${encodeURIComponent(service.name)}`} className="flex items-center justify-center group">
            Book Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Button>
      </div>
    </div>
  )
}
