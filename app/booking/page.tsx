import type { Metadata } from "next"
import { Suspense } from "react"
import BookingForm from "@/components/booking/booking-form"
import BookingBanner from "@/components/booking/booking-banner"

export const metadata: Metadata = {
  title: "Book an Appointment - Glow Unisex Salon",
  description:
    "Book your appointment at Glow Unisex Salon. Choose from our range of services and select a convenient time slot.",
}

export default function BookingPage() {
  return (
    <>
      <BookingBanner />
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <Suspense fallback={
            <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-md text-center">
              <div className="inline-block animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
              <p>Loading booking form...</p>
            </div>
          }>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </>
  )
}
