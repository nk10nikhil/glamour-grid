import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="salon-card p-8 shadow-salon transition-all duration-300 hover:shadow-lg">
      <h2 className="heading-md mb-6 flex items-center">
        <span className="w-8 h-0.5 bg-primary mr-2 animate-pulse"></span>
        Get In Touch
      </h2>

      <div className="space-y-6">
        <div className="flex items-start group hover:bg-gray-50 p-2 rounded-md transition-all duration-300">
          <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3 transition-transform duration-300 group-hover:scale-125" />
          <div>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">Address</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              GCET, Greater Noida, Uttar Pradesh, India
            </p>
          </div>
        </div>

        <div className="flex items-start group hover:bg-gray-50 p-2 rounded-md transition-all duration-300">
          <Phone className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
          <div>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">Phone</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">+91 7777048666</p>
          </div>
        </div>

        <div className="flex items-start group hover:bg-gray-50 p-2 rounded-md transition-all duration-300">
          <Mail className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
          <div>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">Email</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">nk10nikhil@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start group hover:bg-gray-50 p-2 rounded-md transition-all duration-300">
          <Clock className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3 transition-transform duration-300 group-hover:animate-spin-slow" />
          <div>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">Business Hours</h3>
            <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
              <p>Sunday: 11:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
        <h3 className="font-semibold mb-3">Connect With Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-6"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-6"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-6"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
