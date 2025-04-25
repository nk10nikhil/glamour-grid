import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Founder & Master Stylist",
    bio: "With over 15 years of experience, Priya brings her international training and passion for hair to every client.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
    specialties: ["Hair Coloring", "Precision Cuts", "Bridal Styling"],
    social: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Arjun Mehta",
    role: "Senior Hair Stylist",
    bio: "Arjun specializes in contemporary cuts and styling for both men and women, with a focus on personalized looks.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
    specialties: ["Men's Grooming", "Textured Cuts", "Hair Treatments"],
    social: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Neha Patel",
    role: "Makeup Artist & Aesthetician",
    bio: "Neha's creative approach to makeup and skincare has made her a favorite among clients seeking a transformative experience.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
    specialties: ["Bridal Makeup", "Skincare", "Special Occasion Looks"],
    social: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Vikram Singh",
    role: "Nail Art Specialist",
    bio: "Vikram's innovative nail designs and meticulous attention to detail have earned him recognition in the beauty industry.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces&auto=format&q=80",
    specialties: ["Nail Art", "Gel Extensions", "Hand & Foot Care"],
    social: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="heading-lg mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented professionals bring years of experience and passion to deliver exceptional beauty services.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="salon-card overflow-hidden hover-lift">
              <div className="relative h-40 sm:h-72">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-3 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold mb-0 sm:mb-1 line-clamp-1">{member.name}</h3>
                <p className="text-primary text-xs sm:text-base font-medium mb-1 sm:mb-3 line-clamp-1">{member.role}</p>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-3 sm:line-clamp-none">{member.bio}</p>

                <div className="hidden sm:block mb-4">
                  <p className="text-sm font-semibold mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <span key={i} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile-only specialty badge */}
                <div className="block sm:hidden mb-2">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                    {member.specialties[0]}
                  </span>
                </div>

                <div className="flex space-x-2 sm:space-x-3">
                  <a
                    href={member.social.instagram}
                    className="bg-gray-100 p-1.5 sm:p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                    aria-label={`${member.name}'s Instagram`}
                  >
                    <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                  <a
                    href={member.social.facebook}
                    className="bg-gray-100 p-1.5 sm:p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                    aria-label={`${member.name}'s Facebook`}
                  >
                    <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="bg-gray-100 p-1.5 sm:p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-12">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="/about#team">View All Team Members</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
