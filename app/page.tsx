"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryModal } from "@/components/gallery-modal"
import { SocialFeed } from "@/components/social-feed"
import { StructuredData } from "@/components/structured-data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

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
    id: 3,
    src: "/KOKI_3.jpg",
    alt: "Ethiopian traditional design",
    title: "Traditional Wear",
    description: "",
    category: "Traditional Wear",
  },
  {
    id: 4,
    src: "/casual_1.jpg",
    alt: "Modern casual Ethiopian-inspired outfit",
    title: "Casual Wear",
    description: "",
    category: "Casual Wear",
  },
  {
    id: 5,
    src: "/casual_2.jpg",
    alt: "Ethiopian-inspired casual fashion",
    title: "Casual Wear",
    description: "",
    category: "Casual Wear",
  },
  {
    id: 6,
    src: "/casual_3.jpg",
    alt: "Contemporary casual Ethiopian design",
    title: "Casual Wear",
    description: "",
    category: "Casual Wear",
  },
]

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = (item: (typeof portfolioItems)[0]) => {
    setSelectedImage(item)
    setIsModalOpen(true)
  }

  return (
    <>
      <StructuredData />
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Koket Habesha Dress</h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                  Celebrating Ethiopian heritage through contemporary fashion design. Where tradition meets innovation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/portfolio">
                      View Our Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Gallery */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Featured Collection</h2>
                  <p className="text-muted-foreground text-pretty">Discover our latest designs that blend traditional Ethiopian heritage with contemporary fashion.</p>
                </div>
                <Button asChild variant="ghost">
                  <Link href="/portfolio">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item) => (
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
                        onError={(e) => {
                          console.error('Image failed to load:', item.src);
                          e.currentTarget.src = '/placeholder.svg';
                        }}
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


          {/* Social Feed Section */}
          <SocialFeed />

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Ready to Create Something Beautiful?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Let's collaborate to bring your vision to life with authentic Ethiopian design.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />

        <GalleryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} image={selectedImage} />
      </div>
    </>
  )
}
