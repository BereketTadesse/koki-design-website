"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

/**
 * Animation Showcase Component
 * This component demonstrates all available animations
 * Use this as a reference or testing playground
 */
export function AnimationShowcase() {
  return (
    <div className="space-y-16 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Animation Showcase</h2>

        {/* Fade Up Animations */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Fade Up Animations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection animation="fade-up" delay={0}>
              <Card className="p-6">
                <h4 className="font-semibold mb-2">No Delay</h4>
                <p className="text-sm text-muted-foreground">Appears immediately</p>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="p-6">
                <h4 className="font-semibold mb-2">200ms Delay</h4>
                <p className="text-sm text-muted-foreground">Appears after 200ms</p>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="p-6">
                <h4 className="font-semibold mb-2">400ms Delay</h4>
                <p className="text-sm text-muted-foreground">Appears after 400ms</p>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Slide Animations */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Slide Animations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection animation="slide-left">
              <Card className="p-6">
                <h4 className="font-semibold mb-2">Slide from Left</h4>
                <p className="text-sm text-muted-foreground">Slides in from the left side</p>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="slide-right">
              <Card className="p-6">
                <h4 className="font-semibold mb-2">Slide from Right</h4>
                <p className="text-sm text-muted-foreground">Slides in from the right side</p>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Scale Animation */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Scale Animation</h3>
          <AnimatedSection animation="scale">
            <Card className="p-6 max-w-md">
              <h4 className="font-semibold mb-2">Scale In</h4>
              <p className="text-sm text-muted-foreground">
                Grows from 95% to 100% while fading in
              </p>
            </Card>
          </AnimatedSection>
        </section>

        {/* CSS Animation Classes */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">CSS Animation Classes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 animate-float">
              <h4 className="font-semibold mb-2">Float</h4>
              <p className="text-sm text-muted-foreground">
                Gentle floating animation
              </p>
            </Card>
            <Card className="p-6">
              <div className="animate-shimmer h-20 rounded flex items-center justify-center">
                <h4 className="font-semibold">Shimmer</h4>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Shine sweep effect
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold mb-2">Hover Effects</h4>
              <Button className="hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Hover Me
              </Button>
            </Card>
          </div>
        </section>

        {/* Staggered Grid */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Staggered Grid</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[0, 100, 200, 300, 400, 500, 600, 700].map((delay, index) => (
              <AnimatedSection key={index} animation="scale" delay={delay}>
                <Card className="p-4 text-center">
                  <p className="text-sm font-medium">{delay}ms</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Interactive Hover Cards */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Interactive Hover Effects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
              <div className="p-6">
                <h4 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                  Lift & Shadow
                </h4>
                <p className="text-sm text-muted-foreground">
                  Hover to see lift and shadow effect
                </p>
              </div>
            </Card>
            <Card className="group cursor-pointer overflow-hidden hover:border-accent/30 transition-all duration-300">
              <div className="p-6">
                <h4 className="font-semibold mb-2">Border Glow</h4>
                <p className="text-sm text-muted-foreground">
                  Hover to see border color change
                </p>
              </div>
            </Card>
            <Card className="group cursor-pointer overflow-hidden transition-all duration-500">
              <div className="p-6 group-hover:bg-accent/5 transition-colors">
                <h4 className="font-semibold mb-2">Background Tint</h4>
                <p className="text-sm text-muted-foreground">
                  Hover to see background change
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

