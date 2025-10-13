"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  image: {
    src: string
    alt: string
    title: string
    description: string
    category: string
  } | null
}

export function GalleryModal({ isOpen, onClose, image }: GalleryModalProps) {
  if (!image) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl p-0 overflow-hidden rounded-2xl">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-10 bg-background/90 backdrop-blur-sm hover:bg-background/95 transition-colors duration-200"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative min-h-[400px] max-h-[600px] bg-muted">
            <Image 
              src={image.src || "/placeholder.svg"} 
              alt={image.alt} 
              fill 
              className="object-contain hover:scale-105 transition-transform duration-500" 
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            {/* Contact Information Only */}
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-lg">
                <span className="text-2xl">👗</span>
                <span className="font-medium">Habesha dress</span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <span className="text-2xl">🛍️</span>
                <span>Available Onhand</span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <span className="text-2xl">📍</span>
                <span>Addis Ababa, Adama and Bale Robe</span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <span className="text-2xl">📞</span>
                <span className="font-medium">0929097396</span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <span className="text-2xl">📱</span>
                <span>Contact @koki2909</span>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
