import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Hair Care Tips for the Summer Season",
    excerpt: "Protect your hair from sun damage with these expert tips from our stylists.",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=500&fit=crop&crop=focalpoint&auto=format&q=80",
    date: "June 15, 2023",
    readTime: "5 min read",
    category: "Hair Care",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Nail Art Trends in 2023",
    excerpt: "Discover the hottest nail art trends that are taking over this year.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=500&fit=crop&crop=focalpoint&auto=format&q=80",
    date: "May 22, 2023",
    readTime: "7 min read",
    category: "Nail Art",
  },
  {
    id: 3,
    title: "Skincare Routine for Different Skin Types",
    excerpt: "Learn how to create the perfect skincare routine based on your unique skin type.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=500&fit=crop&crop=focalpoint&auto=format&q=80",
    date: "April 10, 2023",
    readTime: "6 min read",
    category: "Skincare",
  },
]

export default function BlogSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Beauty Tips & Trends</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest beauty trends and expert advice from our professional stylists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <div className="salon-card overflow-hidden hover-lift h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    <span>Read More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
