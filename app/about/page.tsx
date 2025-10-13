"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Image from "next/image"
export default function AboutPage() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About KOKI Design</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">Creating beautiful cultural and casual clothing for all your special occasions.</p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                  At KOKI Design, we specialize in crafting custom clothing for every important moment in your life. Whether you need elegant traditional wear for weddings, stylish casual outfits for birthdays, or unique cultural pieces for special celebrations, we create exactly what you need.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  We pride ourselves on delivering high-quality garments in a short time, ensuring you look your best for any event. From concept to completion, we bring your vision to life with attention to detail and commitment to excellence.
                </p>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/about.jpg"
                  alt="About KOKI Design"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Background Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-balance">Our Services</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                We understand that every special occasion deserves the perfect outfit. From intimate birthday celebrations to grand wedding ceremonies, we create custom clothing that reflects your personal style and cultural heritage. Our designs blend traditional Ethiopian craftsmanship with modern fashion trends.
              </p>
              <p className="text-pretty">
                Our team works efficiently to deliver your custom garments in record time without compromising on quality. We use premium fabrics and traditional techniques to ensure each piece is not only beautiful but also durable and comfortable. Whether you need a last-minute outfit or a carefully planned ensemble, we're here to make it happen.
              </p>
              <p className="text-pretty">
                From traditional habesha kemis for cultural events to contemporary casual wear for everyday celebrations, we create clothing that makes you feel confident and beautiful. Every piece is tailored to your specific needs, ensuring the perfect fit and style for your special moments.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
