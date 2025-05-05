import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import ServicesOverview from "@/components/home/services-overview"
import WhyChooseUsSection from "@/components/home/why-choose-us-section"
import PricingSection from "@/components/home/pricing-section"
import ProductsSection from "@/components/home/products-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import BlogSection from "@/components/home/blog-section"
import MembershipSection from "@/components/home/membership-section"
import GiftCardSection from "@/components/home/gift-card-section"
import TeamSection from "@/components/home/team-section"
import FAQSection from "@/components/home/faq-section"
import InstagramSection from "@/components/home/instagram-section"
import CTASection from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "GlamourGrid - Beauty for All",
  description:
    "Premier unisex salon in India offering haircuts, styling, nail care, beauty treatments, and makeup services for men and women.",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUsSection />
      <PricingSection />
      <TestimonialsSection />
      <ProductsSection />
      <BlogSection />
      <TeamSection />
      <MembershipSection />
      <GiftCardSection />
      <FAQSection />
      <InstagramSection />
      <CTASection />
    </>
  )
}
