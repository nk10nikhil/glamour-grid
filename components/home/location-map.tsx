"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import type { Icon as LeafletIcon } from "leaflet"

// Define the location type
type Location = {
  name: string;
  position: [number, number];
}

// Dynamic imports with no SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

// Define salon locations
const locations: Location[] = [
  { name: "Glow Salon - Bandra", position: [19.0596, 72.8295] },
  { name: "Glow Salon - Andheri", position: [19.1136, 72.8697] },
  { name: "Glow Salon - Powai", position: [19.1176, 72.906] },
]

export default function LocationMap() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [leafletIcon, setLeafletIcon] = useState<LeafletIcon | null>(null)

  useEffect(() => {
    setIsMounted(true)
    // Import Leaflet client-side only
    import('leaflet').then((L) => {
      // Import CSS
      require('leaflet/dist/leaflet.css')

      // Configure icon
      setLeafletIcon(new L.Icon({
        iconUrl: "/placeholder.svg?height=41&width=32&text=📍",
        iconSize: [32, 41],
        iconAnchor: [16, 41],
        popupAnchor: [0, -41],
      }))
    })
  }, [])

  if (!isMounted || !leafletIcon) {
    return <div className="h-[400px] rounded-lg overflow-hidden shadow-md flex items-center justify-center bg-gray-100">Loading map...</div>
  }

  return (
    <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
      <MapContainer
        center={[19.076, 72.8777] as [number, number]}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
      >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14029.492579698921!2d77.50486704206543!3d28.468307112055225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea1a83be5989%3A0x6a3690bfa642b5c3!2sGalgotias%20College!5e0!3m2!1sen!2sin!4v1746439364481!5m2!1sen!2sin" width="100%" height="100%"></iframe>
      </MapContainer>
    </div>
  )
}
