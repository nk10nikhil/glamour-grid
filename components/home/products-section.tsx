import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Glow Revitalizing Shampoo",
    price: 599,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500&h=500&fit=crop&crop=focalpoint&auto=format&q=80",
    description: "Nourishing formula for all hair types",
  },
  {
    id: 2,
    name: "Radiance Hair Serum",
    price: 799,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=500&h=500&fit=crop&crop=focalpoint&auto=format&q=80",
    description: "Repair and protect damaged hair",
  },
  {
    id: 3,
    name: "Hydrating Face Mask",
    price: 499,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1567721913486-6585f069b332?w=500&h=500&fit=crop&crop=focalpoint&auto=format&q=80",
    description: "Deep hydration for glowing skin",
  },
  {
    id: 4,
    name: "Nail Care Kit",
    price: 899,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500&h=500&fit=crop&crop=focalpoint&auto=format&q=80",
    description: "Complete kit for salon-quality nails",
  },
]

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="heading-lg mb-4">Salon Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the salon experience home with our premium beauty products, handpicked by our expert stylists.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="salon-card overflow-hidden group hover-lift">
              <div className="relative h-40 sm:h-64">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-6">
                <div className="flex items-center mb-1 sm:mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 ml-1 sm:ml-2">{product.rating}</span>
                </div>
                <h3 className="text-sm sm:text-lg font-bold mb-0.5 sm:mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{product.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-base sm:text-lg font-bold mb-2 sm:mb-0">₹{product.price}</span>
                  <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 py-1 text-xs sm:text-sm w-full sm:w-auto">
                    <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button asChild size="lg" className="bg-primary text-white">
            <a href="/products">View All Products</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
