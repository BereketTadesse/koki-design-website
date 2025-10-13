"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryModal } from "@/components/gallery-modal"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

const portfolioItems = [
  {
    id: 1,
    src: "/koki_1.jpg",
    alt: "Traditional Ethiopian dress with contemporary design",
    title: "Traditional Wear",
    description: "",
    category: "Traditional Wear",
  },
  {
    id: 2,
    src: "/koki_2.jpg",
    alt: "Ethiopian-inspired fashion",
    title: "Traditional Wear",
    description: "",
    category: "Traditional Wear",
  },
  {
    id: 4,
    src: "/koki_4.jpg",
    alt: "Ethiopian wedding attire",
    title: "Traditional Wear",
    description: "",
    category: "Traditional Wear",
  },
  {
    id: 5,
    src: "/koki_5.jpg",
    alt: "Modern Ethiopian design",
    title: "Traditional Wear",
    description: "",
    category: "Traditional Wear",
  },
  {
    id: 7,
    src: "/koki_7.jpg",
    alt: "Traditional habesha kemis",
    title: "Traditional Wear",
    description: "",
    category: "Traditional Wear",
  },
  {
    id: 8,
    src: "/koki_8.jpg",
    alt: "Modern Ethiopian blazer",
    title: "Traditional Wear",
    description: "",
    category: "Traditional Wear",
  },
  {
    id: 10,
    src: "/casual_1.jpg",
    alt: "Modern casual Ethiopian-inspired outfit",
    title: "Casual Wear",
    description: "",
    category: "Casual Wear",
  },
  {
    id: 11,
    src: "/casual_2.jpg",
    alt: "Ethiopian-inspired casual fashion",
    title: "Casual Wear",
    description: "",
    category: "Casual Wear",
  },
  {
    id: 12,
    src: "/casual_3.jpg",
    alt: "Contemporary casual Ethiopian design",
    title: "Casual Wear",
    description: "",
    category: "Casual Wear",
  },
  {
    id: 13,
    src: "/casual_4.jpg",
    alt: "Ethiopian casual fashion design",
    title: "Casual Wear",
    description: "",
    category: "Casual Wear",
  },
  {
    id: 14,
    src: "/casual_5.jpg",
    alt: "Modern Ethiopian casual outfit",
    title: "Casual Wear",
    description: "",
    category: "Casual Wear",
  },
  {
    id: 15,
    src: "/casual_6.jpg",
    alt: "Ethiopian-inspired casual style",
    title: "Casual Wear",
    description: "",
    category: "Casual Wear",
  },
  {
    id: 16,
    src: "/casual_7.jpg",
    alt: "Contemporary Ethiopian casual fashion",
    title: "Casual Wear",
    description: "",
    category: "Casual Wear",
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Designs")
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    "All Designs",
    "Traditional Wear",
    "Casual Wear",
  ]

  const categoryMap: Record<string, string> = {
    "All Designs": "All",
    "Traditional Wear": "Traditional Wear",
    "Casual Wear": "Casual Wear",
  }

  const filteredItems =
    selectedCategory === "All Designs"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === categoryMap[selectedCategory])

  const handleImageClick = (item: (typeof portfolioItems)[0]) => {
    setSelectedImage(item)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Explore our collection of traditional and contemporary Ethiopian fashion designs.</p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="min-w-[120px]"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="group cursor-pointer overflow-hidden border-border/50 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-xl hover:scale-[1.02] hover:-translate-y-2"
                  onClick={() => handleImageClick(item)}
                >
                  <div className="relative aspect-square overflow-hidden bg-muted rounded-t-xl">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-medium">View Details</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-balance">{item.title}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <GalleryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} image={selectedImage} />
    </div>
  )
}
