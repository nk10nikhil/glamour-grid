"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"

const customIcon = new Icon({
    iconUrl: "/placeholder.svg?height=41&width=32&text=📍",
    iconSize: [32, 41],
    iconAnchor: [16, 41],
    popupAnchor: [0, -41],
})

export default function MapComponent() {
    return (
        <MapContainer center={[19.076, 72.8777]} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[19.076, 72.8777]} icon={customIcon}>
                <Popup className="custom-popup">
                    <div className="text-center">
                        <h3 className="font-bold">Glow Unisex Salon</h3>
                        <p className="text-sm">123 Beauty Lane, Mumbai</p>
                        <p className="text-xs text-gray-600 mt-1">Call: +91 98765 43210</p>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    )
}