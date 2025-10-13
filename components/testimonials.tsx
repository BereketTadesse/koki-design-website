import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Selam Tesfaye",
    role: "Fashion Enthusiast",
    image: "/koki_10.jpg",
    content:
      "The attention to detail and cultural authenticity in every piece is remarkable. I wore a custom habesha kemis to my sister's wedding and received countless compliments. Truly exceptional craftsmanship!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Abebe",
    role: "Business Professional",
    image: "/koki_11.jpg",
    content:
      "I commissioned a modern suit with traditional Ethiopian patterns for an important conference. The result was stunning - professional yet uniquely cultural. The designer perfectly understood my vision.",
    rating: 5,
  },
  {
    id: 3,
    name: "Hanna Bekele",
    role: "Bride",
    image: "/koki_12.jpg",
    content:
      "My wedding dress was a dream come true. The designer created a perfect blend of traditional and contemporary styles that honored my heritage while feeling modern and elegant. I felt absolutely beautiful!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Girma",
    role: "Art Collector",
    image: "/koki_13.jpg",
    content:
      "The accessories collection is extraordinary. Each piece tells a story and showcases the incredible skill of Ethiopian artisans. I've purchased several items as gifts and they're always treasured.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">What Our Clients Say</h2>
          <p className="text-muted-foreground text-pretty">
            Hear from those who have experienced our designs firsthand
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{testimonial.content}</p>

              <div className="flex items-center gap-3">
                {testimonial.image ? (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted ring-2 ring-accent/20 hover:ring-accent/40 transition-all duration-300">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center ring-2 ring-accent/20 hover:ring-accent/40 transition-all duration-300">
                    <span className="text-accent font-semibold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
