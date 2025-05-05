import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl border border-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center text-gray-800">
        <span className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mr-4 rounded-full"></span>
        Contact Info
      </h2>

      <div className="space-y-7">
        <div className="flex items-start group hover:bg-purple-50 p-4 rounded-xl transition-all duration-300">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 flex items-center justify-center shrink-0 mr-4 group-hover:from-purple-600/20 group-hover:to-pink-500/20 transition-all duration-300">
            <MapPin className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1 group-hover:text-purple-700 transition-colors duration-300">Our Location</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
              GCET, Greater Noida, Uttar Pradesh, India
            </p>
          </div>
        </div>

        <div className="flex items-start group hover:bg-purple-50 p-4 rounded-xl transition-all duration-300">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 flex items-center justify-center shrink-0 mr-4 group-hover:from-purple-600/20 group-hover:to-pink-500/20 transition-all duration-300">
            <Phone className="h-6 w-6 text-purple-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1 group-hover:text-purple-700 transition-colors duration-300">Phone Number</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              <a href="tel:+917777048666" className="hover:text-purple-600 transition-colors">+91 7777048666</a>
            </p>
          </div>
        </div>

        <div className="flex items-start group hover:bg-purple-50 p-4 rounded-xl transition-all duration-300">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 flex items-center justify-center shrink-0 mr-4 group-hover:from-purple-600/20 group-hover:to-pink-500/20 transition-all duration-300">
            <Mail className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-all duration-300" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1 group-hover:text-purple-700 transition-colors duration-300">Email Address</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              <a href="mailto:nk10nikhil@gmail.com" className="hover:text-purple-600 transition-colors">nk10nikhil@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="flex items-start group hover:bg-purple-50 p-4 rounded-xl transition-all duration-300">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 flex items-center justify-center shrink-0 mr-4 group-hover:from-purple-600/20 group-hover:to-pink-500/20 transition-all duration-300">
            <Clock className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-all duration-300" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1 group-hover:text-purple-700 transition-colors duration-300">Business Hours</h3>
            <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 space-y-1">
              <p className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span>10:00 AM - 8:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span>10:00 AM - 8:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span>11:00 AM - 6:00 PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-gray-200">
        <h3 className="font-semibold text-lg mb-5 text-gray-800">Connect With Us</h3>
        <div className="flex space-x-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 flex items-center justify-center hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-purple-600 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 flex items-center justify-center hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5 text-purple-600 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 flex items-center justify-center hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5 text-purple-600 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>
  )
}
