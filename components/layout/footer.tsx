import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Scissors } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Glow Salon */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3 animate-float">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">
                GlamourGrid
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Elevating beauty and style with our premium unisex salon services. Experience the glow today!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  GCET, Greater Noida, India
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-6 w-6 text-primary mr-3 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">+91 7777048666</span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-6 w-6 text-primary mr-3 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">nk10nikhil@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-3"></span>
              Business Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start hover:bg-gray-800/30 p-2 rounded-md transition-all duration-300 group">
                <Clock className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3 transition-transform duration-300 group-hover:rotate-12" />
                <div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Monday - Saturday:</p>
                  <p className="font-semibold text-white">10:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start hover:bg-gray-800/30 p-2 rounded-md transition-all duration-300 group">
                <Clock className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3 transition-transform duration-300 group-hover:rotate-12" />
                <div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Sunday:</p>
                  <p className="font-semibold text-white">11:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-10 pb-8 mb-8 animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">Stay updated with our latest offers and beauty tips.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 focus:scale-105"
              />
              <button
                type="submit"
                className="btn-primary hover:scale-105 hover:-translate-y-1 transition-all duration-300 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
          <p>&copy; {new Date().getFullYear()} GlamourGrid. All rights reserved.</p>
          <p className="mt-2">
            <span className="inline-block">Made with <span className="text-red-500 animate-pulse">❤️</span> in India</span>
            <span className="mx-2">|</span>
            <span className="inline-block">सभी के लिए सुंदरता (Beauty for All)</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
