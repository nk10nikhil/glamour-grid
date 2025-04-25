"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "What are your salon's operating hours?",
    answer:
      "Our salon is open Monday to Saturday from 10:00 AM to 8:00 PM, and on Sundays from 11:00 AM to 6:00 PM. We recommend booking appointments in advance, especially for weekends.",
  },
  {
    question: "Do I need to book an appointment or can I walk in?",
    answer:
      "While we do accept walk-ins based on availability, we highly recommend booking an appointment to ensure you get your preferred time slot and stylist. You can book online through our website or by calling us.",
  },
  {
    question: "What happens if I need to cancel my appointment?",
    answer:
      "We understand that plans can change. We request that you notify us at least 24 hours in advance if you need to cancel or reschedule your appointment. Late cancellations or no-shows may incur a cancellation fee.",
  },
  {
    question: "Do you offer services for both men and women?",
    answer:
      "Yes, we are a unisex salon offering a wide range of services for both men and women. Our skilled stylists are trained to cater to all hair types and styles.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit/debit cards, UPI payments, and digital wallets like Paytm and Google Pay. We also accept our salon gift cards as a form of payment.",
  },
  {
    question: "Do you sell gift cards?",
    answer:
      "Yes, we offer both digital and physical gift cards in various denominations. They make perfect gifts for any occasion and can be used for any service or product at our salon.",
  },
]

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>("item-0")

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, booking process, and policies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="salon-card border-0 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <Button asChild size="lg" className="bg-primary text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
