"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, Mail } from "lucide-react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
      }, 3000)
    }, 1500)
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl border border-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center text-gray-800">
        <span className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mr-4 rounded-full"></span>
        Get In Touch
      </h2>

      {isSuccess ? (
        <div className="text-center py-12 animate-fadeIn">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 mb-6 animate-scaleIn">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>Message Sent!</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            Thank you for contacting us. One of our beauty consultants will get back to you very soon.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full px-6 py-2.5 shadow-md hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="transition-all duration-300 group">
            <Label htmlFor="name" className="text-gray-700 font-medium text-sm block mb-2 ml-1 group-hover:text-purple-600 transition-colors">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="px-4 py-2.5 rounded-xl border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-200 transition-all duration-300 w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="transition-all duration-300 group">
              <Label htmlFor="email" className="text-gray-700 font-medium text-sm block mb-2 ml-1 group-hover:text-purple-600 transition-colors">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="px-4 py-2.5 rounded-xl border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-200 transition-all duration-300 w-full"
              />
            </div>
            <div className="transition-all duration-300 group">
              <Label htmlFor="phone" className="text-gray-700 font-medium text-sm block mb-2 ml-1 group-hover:text-purple-600 transition-colors">Phone Number</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 123 456 7890"
                required
                className="px-4 py-2.5 rounded-xl border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-200 transition-all duration-300 w-full"
              />
            </div>
          </div>

          <div className="transition-all duration-300 group">
            <Label htmlFor="message" className="text-gray-700 font-medium text-sm block mb-2 ml-1 group-hover:text-purple-600 transition-colors">Your Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us how we can help you..."
              rows={6}
              required
              className="px-4 py-2.5 rounded-xl border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-200 transition-all duration-300 w-full resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-xl py-3.5 shadow-md hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 font-medium text-base mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <span className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full"></span>
                Sending your message...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </div>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting this form, you agree to our {" "}
            <a href="#" className="text-purple-600 hover:text-pink-500 underline transition-colors">Privacy Policy</a>
          </p>
        </form>
      )}
    </div>
  )
}
