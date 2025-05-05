"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, Check, Calendar as CalendarIcon, User, Phone, Mail, Scissors } from "lucide-react"

// Service categories for the form
const serviceCategories = [
  {
    label: "Hair Services",
    options: [
      { value: "men-haircut", label: "Men's Haircut - ₹300" },
      { value: "women-haircut", label: "Women's Haircut - ₹500" },
      { value: "men-color", label: "Men's Hair Color - ₹800" },
      { value: "women-color", label: "Women's Hair Color - ₹1200" },
      { value: "hair-spa", label: "Hair Spa Treatment - ₹800" },
    ],
  },
  {
    label: "Beauty Services",
    options: [
      { value: "men-facial", label: "Men's Facial - ₹600" },
      { value: "basic-facial", label: "Basic Facial - ₹500" },
      { value: "threading", label: "Eyebrow Threading - ₹100" },
      { value: "bridal-makeup", label: "Bridal Makeup - ₹3000" },
    ],
  },
  {
    label: "Nail Services",
    options: [
      { value: "manicure", label: "Manicure - ₹300" },
      { value: "pedicure", label: "Pedicure - ₹400" },
      { value: "nail-art", label: "Nail Art - ₹500" },
    ],
  },
]

// Time slots
const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
]

export default function BookingForm() {
  const searchParams = useSearchParams()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("")
  const [selectedService, setSelectedService] = useState<string>("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [whatsappConfirm, setWhatsappConfirm] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Set initial service from URL query parameter
  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam) {
      // Find the matching service in our categories
      for (const category of serviceCategories) {
        const matchingService = category.options.find((option) =>
          option.label.toLowerCase().includes(serviceParam.toLowerCase()),
        )
        if (matchingService) {
          setSelectedService(matchingService.value)
          break
        }
      }
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setDate(undefined)
        setSelectedTimeSlot("")
        setName("")
        setPhone("")
        setEmail("")
        setWhatsappConfirm(true)
      }, 5000)
    }, 1500)
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-xl border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-24 h-24 rounded-full bg-white animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-white animate-float" style={{ animationDelay: "1.5s" }}></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center mb-2">
            <Scissors className="h-6 w-6 mr-2" />
            <CardTitle className="text-2xl md:text-3xl font-bold">Book Your Appointment</CardTitle>
          </div>
          <CardDescription className="text-white/90 text-base md:text-lg max-w-xl">
            Reserve your spot at GlamourGrid for a transformative beauty experience tailored just for you.
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="p-8 md:p-10">
        {isSuccess ? (
          <div className="text-center py-10 px-4 animate-fadeIn">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-100 to-green-200 mb-6 animate-scaleIn shadow-inner">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>Booking Confirmed!</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto animate-fadeInUp text-lg" style={{ animationDelay: "0.3s" }}>
              Your appointment has been scheduled successfully. We've sent a confirmation to your phone and look forward to seeing you!
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 animate-fadeInUp text-base"
              style={{ animationDelay: "0.4s" }}
            >
              Book Another Appointment
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="transition-all duration-300 group">
                <Label htmlFor="name" className="text-gray-700 font-medium text-sm block mb-2 ml-1 group-hover:text-purple-600 transition-colors flex items-center">
                  <User className="h-4 w-4 mr-2 text-purple-500" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="px-4 py-3 rounded-xl border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-200 transition-all duration-300 w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="transition-all duration-300 group">
                  <Label htmlFor="phone" className="text-gray-700 font-medium text-sm block mb-2 ml-1 group-hover:text-purple-600 transition-colors flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-purple-500" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                    className="px-4 py-3 rounded-xl border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-200 transition-all duration-300 w-full"
                  />
                </div>
                <div className="transition-all duration-300 group">
                  <Label htmlFor="email" className="text-gray-700 font-medium text-sm block mb-2 ml-1 group-hover:text-purple-600 transition-colors flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-purple-500" />
                    Email (Optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="px-4 py-3 rounded-xl border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-200 transition-all duration-300 w-full"
                  />
                </div>
              </div>

              <div className="transition-all duration-300 group">
                <Label htmlFor="service" className="text-gray-700 font-medium text-sm block mb-2 ml-1 group-hover:text-purple-600 transition-colors flex items-center">
                  <Scissors className="h-4 w-4 mr-2 text-purple-500" />
                  Select Service
                </Label>
                <Select value={selectedService} onValueChange={setSelectedService} required>
                  <SelectTrigger id="service" className="px-4 py-3 rounded-xl border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-200 transition-all duration-300">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent className="border border-gray-200 shadow-lg rounded-xl overflow-hidden">
                    {serviceCategories.map((category) => (
                      <div key={category.label}>
                        <div className="px-3 py-2 text-sm font-semibold text-purple-700 bg-purple-50">{category.label}</div>
                        {category.options.map((option) => (
                          <SelectItem key={option.value} value={option.value} className="px-3 py-2.5 text-gray-700 hover:text-purple-700 focus:text-purple-700">
                            {option.label}
                          </SelectItem>
                        ))}
                      </div>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="transition-all duration-300 group">
                  <Label className="text-gray-700 font-medium text-sm block mb-2 ml-1 group-hover:text-purple-600 transition-colors flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-purple-500" />
                    Select Date
                  </Label>
                  <div className="border rounded-xl mt-2 border-gray-300 shadow-sm hover:border-purple-300 transition-all duration-300 overflow-hidden">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => {
                        // Disable past dates and Sundays
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        return date < today || date.getDay() === 0
                      }}
                      className="rounded-xl p-3"
                    />
                  </div>
                </div>

                <div className="transition-all duration-300 group">
                  <Label className="text-gray-700 font-medium text-sm block mb-2 ml-1 group-hover:text-purple-600 transition-colors flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-purple-500" />
                    Select Time Slot
                  </Label>
                  <div className="grid grid-cols-2 gap-2 mt-2 h-[280px] overflow-y-auto border rounded-xl p-3 border-gray-300 shadow-sm hover:border-purple-300 transition-all duration-300">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        variant={selectedTimeSlot === slot ? "default" : "outline"}
                        className={`justify-start ${selectedTimeSlot === slot
                            ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white border-0"
                            : "border-gray-200 text-gray-700 hover:text-purple-700 hover:border-purple-300"
                          } rounded-lg py-2.5 transition-all duration-300`}
                        onClick={() => setSelectedTimeSlot(slot)}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                <Checkbox
                  id="whatsapp"
                  checked={whatsappConfirm}
                  onCheckedChange={(checked) => setWhatsappConfirm(checked as boolean)}
                  className="h-5 w-5 border-purple-300 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white"
                />
                <label
                  htmlFor="whatsapp"
                  className="text-sm font-medium leading-none text-gray-700"
                >
                  Send appointment confirmation and reminders via WhatsApp
                </label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-xl py-4 shadow-md hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 text-base font-medium"
              disabled={!date || !selectedTimeSlot || !selectedService || !name || !phone || isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <span className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full"></span>
                  Processing Your Booking...
                </div>
              ) : (
                "Confirm Appointment"
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By booking an appointment, you agree to our {" "}
              <a href="#" className="text-purple-600 hover:text-pink-500 underline transition-colors">Cancellation Policy</a>
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
