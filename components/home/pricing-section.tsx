import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

const pricingPackages = [
  {
    name: "Essential Beauty",
    price: 1499,
    description: "Perfect for a quick refresh",
    features: ["Basic Haircut & Styling", "Express Manicure", "Eyebrow Threading", "10% Off Next Visit"],
    popular: false,
    link: "/booking?package=essential",
  },
  {
    name: "Premium Glow",
    price: 2999,
    description: "Our most popular package",
    features: [
      "Premium Haircut & Styling",
      "Hair Spa Treatment",
      "Manicure & Pedicure",
      "Basic Facial",
      "15% Off Next Visit",
    ],
    popular: true,
    link: "/booking?package=premium",
  },
  {
    name: "Luxury Experience",
    price: 4999,
    description: "Complete luxury treatment",
    features: [
      "Premium Haircut & Styling",
      "Hair Color/Highlights",
      "Deluxe Manicure & Pedicure",
      "Premium Facial",
      "Head & Shoulder Massage",
      "20% Off Next Visit",
    ],
    popular: false,
    link: "/booking?package=luxury",
  },
]

export default function PricingSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="heading-lg mb-4">Special Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indulge in our carefully curated beauty packages designed to give you the complete Glow experience at
            special prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pricingPackages.map((pkg, index) => (
            <div
              key={index}
              className={`salon-card p-4 sm:p-8 relative hover-lift ${pkg.popular ? "border-2 border-primary shadow-lg" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-2 sm:px-4 py-0.5 sm:py-1 text-xs sm:text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              <div className="flex flex-col sm:block">
                <div className="flex justify-between items-start sm:block mb-2 sm:mb-0">
                  <h3 className="text-lg sm:text-2xl font-bold mb-0 sm:mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline sm:mb-4">
                    <span className="text-xl sm:text-3xl font-bold">₹{pkg.price}</span>
                    <span className="text-xs sm:text-base text-gray-500 ml-1">/package</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-6">{pkg.description}</p>

                <ul className="grid grid-cols-2 sm:block gap-1 mb-4 sm:mb-8 sm:space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mr-1 sm:mr-2 mt-0.5 sm:mt-0" />
                      <span className="text-xs sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="sm"
                  className={`w-full text-xs sm:text-base ${pkg.popular ? "bg-primary text-white" : "bg-secondary text-secondary-foreground"}`}
                >
                  <Link href={pkg.link}>Book This Package</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
