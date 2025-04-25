import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: (
      <Image
        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=100&h=100&fit=crop&crop=faces&auto=format&q=60"
        alt="Hairstyling"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
    ),
    title: "Expert Haircuts & Styling",
    description: "Precision cuts and trendsetting styles for all hair types.",
    link: "/services#hair",
  },
  {
    icon: (
      <Image
        src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=100&h=100&fit=crop&crop=faces&auto=format&q=60"
        alt="Nail Art"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
    ),
    title: "Nail Art & Care",
    description: "Express yourself with our creative nail designs and treatments.",
    link: "/services#nails",
  },
  {
    icon: (
      <Image
        src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=100&h=100&fit=crop&crop=faces&auto=format&q=60"
        alt="Makeup"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
    ),
    title: "Makeup & Skincare",
    description: "Enhance your natural beauty with our expert makeup and skincare services.",
    link: "/services#beauty",
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-16 animate-fadeInUp">
          <h2 className="heading-lg mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indulge in our wide range of luxury beauty treatments, tailored to enhance your unique style.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="salon-card p-3 sm:p-8 text-center transition-all duration-500 hover:shadow-xl hover:bg-primary/5 animate-fadeInUp"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-3 sm:mb-6 animate-scaleIn hover:animate-float transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center group text-sm sm:text-base"
              >
                Learn More
                <svg
                  className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-16 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
          <Button
            asChild
            size="lg"
            className="btn-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
