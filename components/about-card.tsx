"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

interface AboutCardProps {
  title: string
  description: string
  icon: string
  delay?: number
}

export function AboutCard({ title, description, icon, delay = 0 }: AboutCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <Card
      ref={cardRef}
      className={`p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-700 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/10 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-4 text-center">{icon}</div>
      <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{title}</h3>
      <p className="text-muted-foreground text-center leading-relaxed">{description}</p>
    </Card>
  )
}
