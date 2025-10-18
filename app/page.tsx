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
import { useState, useEffect, useRef } from "react"
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
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          {/* Hero Section with Parallax */}
          <section 
            className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div 
                className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
                style={{
                  transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.15}px)`,
                }}
              />
              <div 
                className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                style={{
                  transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.1}px)`,
                }}
              />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div 
                className="max-w-3xl"
                style={{
                  opacity: Math.max(1 - scrollY / 500, 0),
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                <h1 
                  className={`text-4xl md:text-6xl font-bold mb-6 text-balance transition-all duration-1000 ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Koket Habesha Dress
                </h1>
                <p 
                  className={`text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty transition-all duration-1000 delay-200 ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Celebrating Ethiopian heritage through contemporary fashion design. Where tradition meets innovation.
                </p>
                <div 
                  className={`flex flex-wrap gap-4 transition-all duration-1000 delay-400 ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <Button 
                    asChild 
                    size="lg"
                    className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                  >
                    <Link href="/portfolio">
                      View Our Work
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Gallery with Staggered Parallax */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
                    Featured Collection
                  </h2>
                  <p className="text-muted-foreground text-pretty">
                    Discover our latest designs that blend traditional Ethiopian heritage with contemporary fashion.
                  </p>
                </div>
                <Button asChild variant="ghost">
                  <Link href="/portfolio">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item, index) => (
                  <ParallaxCard
                    key={item.id}
                    item={item}
                    index={index}
                    onClick={() => handleImageClick(item)}
                  />
                ))}
              </div>
            </div>
          </section>


          {/* Social Feed Section */}
          <SocialFeed />

          {/* CTA Section with Parallax */}
          <section 
            className="py-20 px-4 sm:px-6 lg:px-8"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
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

// Parallax Card Component with Enhanced Animations
function ParallaxCard({ 
  item, 
  index, 
  onClick 
}: { 
  item: typeof portfolioItems[0]
  index: number
  onClick: () => void 
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className="group cursor-pointer overflow-hidden border-border/50 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-xl hover:scale-[1.02] hover:-translate-y-2 relative"
        onClick={onClick}
      >
        {/* Animated shine effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000 ${
            isHovered ? 'translate-x-full' : ''
          }`}
          style={{ zIndex: 10 }}
        />
        
        <div className="relative aspect-square overflow-hidden bg-muted rounded-t-xl">
          <Image
            src={item.src || "/placeholder.svg"}
            alt={item.alt}
            fill
            className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            onError={(e) => {
              console.error('Image failed to load:', item.src)
              e.currentTarget.src = '/placeholder.svg'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-sm font-medium flex items-center gap-2">
                View Details
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 relative">
          <div className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded mb-2 transform group-hover:scale-105 transition-transform duration-300">
            {item.category}
          </div>
          <h3 className="text-lg font-semibold mb-2 text-balance group-hover:text-accent transition-colors duration-300">
            {item.title}
          </h3>
        </div>
      </Card>
    </div>
  )
}
