"use client"

import { useEffect, useState, useRef } from "react"

export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const scrolled = window.scrollY
        const elementTop = rect.top + scrolled
        const windowHeight = window.innerHeight
        
        // Calculate parallax offset
        if (scrolled + windowHeight > elementTop && scrolled < elementTop + rect.height) {
          const parallax = (scrolled - elementTop) * speed
          setOffset(parallax)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return { offset, elementRef }
}

export function useScrollFade(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold])

  return { isVisible, elementRef }
}

