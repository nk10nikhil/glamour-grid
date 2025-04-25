import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Crown, Gift, Percent, Clock, Award } from "lucide-react"

const membershipBenefits = [
  {
    icon: <Percent className="h-10 w-10 text-primary" />,
    title: "Exclusive Discounts",
    description: "Enjoy up to 25% off on all salon services and products with our membership program.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Priority Booking",
    description: "Get priority access to appointment slots, even during peak hours and weekends.",
  },
  {
    icon: <Gift className="h-10 w-10 text-primary" />,
    title: "Complimentary Services",
    description: "Receive free add-on services and birthday treats as a valued member.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Loyalty Points",
    description: "Earn points with every visit that can be redeemed for services or products.",
  },
]

export default function MembershipSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-32 -mb-32"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Crown className="h-8 w-8 text-primary" />
          </div>
          <h2 className="heading-lg mb-4">Glow Membership Program</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our exclusive membership program and enjoy premium benefits, special discounts, and VIP treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {membershipBenefits.map((benefit, index) => (
            <div key={index} className="salon-card p-6 text-center hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="salon-card p-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Become a Member?</h3>
          <p className="text-gray-600 mb-6">
            Sign up today for our membership program and start enjoying exclusive benefits from your very first visit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-white">
              <Link href="/membership">Join Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/membership#plans">View Membership Plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
