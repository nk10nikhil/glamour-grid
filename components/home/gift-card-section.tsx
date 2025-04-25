import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GiftCardSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=800&fit=crop&crop=focalpoint&auto=format&q=80"
              alt="Glow Salon Gift Card"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 border border-white/30">
                <h3 className="text-2xl font-bold mb-2">Glow Salon Gift Card</h3>
                <p className="text-white/90">The perfect gift for any occasion</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="heading-lg mb-6">Give the Gift of Beauty</h2>
            <p className="text-gray-600 mb-4">
              Looking for the perfect gift? A Glow Salon gift card is ideal for birthdays, anniversaries, or just to
              show someone you care.
            </p>
            <p className="text-gray-600 mb-6">
              Our digital and physical gift cards can be customized with your personal message and are available in
              various denominations.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Gift Card Features:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Available in denominations from ₹500 to ₹10,000</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Digital gift cards delivered instantly via email</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Physical gift cards with premium packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Valid for all salon services and products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>No expiration date</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-white">
                <Link href="/gift-cards">Purchase a Gift Card</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/gift-cards#redeem">Redeem a Gift Card</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
