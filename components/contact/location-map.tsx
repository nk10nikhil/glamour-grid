"use client"

import { useState } from "react"
import dynamic from 'next/dynamic'
import { ExternalLink } from "lucide-react"

// Dynamically import the map components with no SSR to prevent window errors
const MapWithNoSSR = dynamic(
  () => import('./map-component'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
        <div className="text-center">
          <div className="inline-block animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
          <p>Loading map...</p>
        </div>
      </div>
    )
  }
)

export default function LocationMap() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="rounded-lg overflow-hidden shadow-md h-[400px] relative group transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative elements */}
      <div className={`absolute top-4 left-4 bg-white/90 backdrop-blur-sm z-[999] p-3 rounded-lg shadow-md transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
        <h3 className="font-semibold text-sm">Glow Unisex Salon</h3>
        <p className="text-xs text-gray-600">123 Beauty Lane, Mumbai</p>
      </div>

      <a
        href="https://maps.google.com?q=19.076,72.8777"
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute bottom-4 right-4 z-[999] bg-primary text-white py-2 px-4 rounded-full shadow-md flex items-center text-sm transition-all duration-500 hover:bg-primary/90 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        Get Directions
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>

      <div className="absolute inset-0 border-4 border-primary/30 rounded-lg pointer-events-none z-[998] transition-opacity duration-300 group-hover:opacity-100 opacity-0 animate-pulse"></div>

      <MapWithNoSSR />
    </div>
  )
}
