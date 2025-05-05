import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, IndianRupee, Calendar } from "lucide-react"

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
      className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 group hover:translate-y-[-8px] animate-fadeInUp"
      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
    >
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs py-1 px-3 rounded-full shadow-md transform rotate-2 font-medium">
          Popular
        </div>

        <div className="absolute left-0 bottom-0 w-full p-4">
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors duration-300 drop-shadow-md">{service.name}</h3>
        </div>
      </div>

      <div className="p-5 sm:p-6 relative">
        <p className="text-gray-600 text-sm sm:text-base mb-5 line-clamp-3">{service.description}</p>

        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-sm sm:text-base px-3 py-1 rounded-full group-hover:shadow-md transition-all duration-300">
            <IndianRupee className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
            <span>{service.price}</span>
          </div>

          <div className="flex items-center text-gray-600 text-xs sm:text-sm border border-gray-200 px-3 py-1 rounded-full group-hover:border-purple-200 transition-all duration-300">
            <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 group-hover:text-purple-500" />
            <span>{service.duration}</span>
          </div>
        </div>

        <Button
          asChild
          size="default"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/20 rounded-full py-2.5 transition-all duration-300 font-medium"
        >
          <Link href={`/booking?service=${encodeURIComponent(service.name)}`} className="flex items-center justify-center group">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Book Appointment</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
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
