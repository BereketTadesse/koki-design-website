"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Send, ExternalLink } from "lucide-react"
import Image from "next/image"

const socialPosts = [
  {
    id: 1,
    platform: "instagram",
    image: "/koki_1.jpg",
    caption: "New collection dropping soon! Traditional meets contemporary. 🇪🇹",
    likes: 342,
    date: "2 days ago",
  },
  {
    id: 2,
    platform: "instagram",
    image: "/koki_2.jpg",
    caption: "Handcrafted accessories made with love by local artisans.",
    likes: 289,
    date: "5 days ago",
  },
  {
    id: 3,
    platform: "instagram",
    image: "/koki_3.jpg",
    caption: "Casual Friday vibes with Ethiopian flair ✨",
    likes: 421,
    date: "1 week ago",
  },
]

export function SocialFeed() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Follow Our Journey</h2>
          <p className="text-muted-foreground mb-6 text-pretty">
            Stay updated with our latest designs and behind-the-scenes content
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild variant="outline">
              <a href="https://www.instagram.com/kokethabesha_dress/#" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" />
                Follow on Instagram
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://www.facebook.com/share/1K5vC7Y3gu/" target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-4 w-4" />
                Like on Facebook
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://t.me/kokethabeshadress" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-4 w-4" />
                Join Telegram
              </a>
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-border/50 hover:border-accent/30 group cursor-pointer rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square bg-muted">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2 text-pretty">{post.caption}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.likes} likes</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
