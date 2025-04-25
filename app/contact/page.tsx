import type { Metadata } from "next"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import LocationMap from "@/components/contact/location-map"

export const metadata: Metadata = {
  title: "Contact Us - Glow Unisex Salon",
  description: "Get in touch with Glow Unisex Salon. Find our location, contact information, and business hours.",
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light py-20 mb-12 relative overflow-hidden">
        {/* Background pattern elements (decorative) */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white animate-float"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white animate-float"
            style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white animate-float"
            style={{ animationDelay: "1.5s" }}></div>
        </div>

        <div className="container-custom relative z-10">
          <h1 className="heading-xl text-white text-center mb-4 animate-fadeInDown">Contact Us</h1>
          <p className="text-xl text-white/90 text-center max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}>
            We're here to answer any questions you may have about our services or to book your next appointment.
          </p>
        </div>
      </div>

      <div className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fadeInLeft" style={{ animationDelay: "0.4s" }}>
            <ContactInfo />
          </div>
          <div className="animate-fadeInRight" style={{ animationDelay: "0.6s" }}>
            <ContactForm />
          </div>
        </div>

        <div className="mt-20 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
          <h2 className="heading-md mb-6">Find Us</h2>
          <LocationMap />
        </div>
      </div>
    </>
  )
}
