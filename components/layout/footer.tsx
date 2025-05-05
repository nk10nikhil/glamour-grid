import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Scissors, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-600 filter blur-[120px]"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-pink-500 filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* About GlamourGrid */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-purple-500/20">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                GlamourGrid
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Elevating beauty and style with our premium unisex salon services. Experience transformation and confidence with every visit.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-125"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-10 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-pink-500 opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-pink-500 opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-pink-500 opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-pink-500 opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <ArrowRight className="h-4 w-0 mr-0 text-pink-500 opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-10 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mr-4 group-hover:bg-purple-900/30 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 mt-1.5">
                  GCET, Greater Noida, India
                </span>
              </li>
              <li className="flex items-start group">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mr-4 group-hover:bg-purple-900/30 transition-all duration-300">
                  <Phone className="h-5 w-5 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 mt-1.5">+91 7777048666</span>
              </li>
              <li className="flex items-start group">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mr-4 group-hover:bg-purple-900/30 transition-all duration-300">
                  <Mail className="h-5 w-5 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 mt-1.5">nk10nikhil@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-10 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mr-3"></span>
              Business Hours
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start hover:bg-gray-800/40 p-3 rounded-xl transition-all duration-300 group">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mr-4 group-hover:bg-purple-900/30 transition-all duration-300">
                  <Clock className="h-5 w-5 text-pink-400 transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Monday - Saturday:</p>
                  <p className="font-semibold text-white">10:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start hover:bg-gray-800/40 p-3 rounded-xl transition-all duration-300 group">
                <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mr-4 group-hover:bg-purple-900/30 transition-all duration-300">
                  <Clock className="h-5 w-5 text-pink-400 transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Sunday:</p>
                  <p className="font-semibold text-white">11:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-12 pb-10 mb-10 animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">Stay updated with our latest offers, beauty tips, and exclusive promotions delivered directly to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-5 py-3.5 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-gray-700 transition-all duration-300"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm animate-fadeInUp border-t border-gray-800 pt-8" style={{ animationDelay: "0.6s" }}>
          <p>&copy; {new Date().getFullYear()} GlamourGrid. All rights reserved.</p>
          <p className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2">
            <span className="inline-block">Made with <span className="text-pink-500 animate-pulse">❤️</span> in India</span>
            <span className="hidden sm:inline-block">|</span>
            <span className="inline-block">सभी के लिए सुंदरता (Beauty for All)</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
