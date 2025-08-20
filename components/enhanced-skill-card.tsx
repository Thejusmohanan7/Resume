"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface EnhancedSkillCardProps {
  skill: string
  level: number
  description: string
  icon: string
  delay?: number
}

export function EnhancedSkillCard({ skill, level, description, icon, delay = 0 }: EnhancedSkillCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevel, setAnimatedLevel] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
            // Animate progress bar
            const timer = setTimeout(() => {
              setAnimatedLevel(level)
            }, 300)
            return () => clearTimeout(timer)
          }, delay)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [delay, level])

  return (
    <Card
      ref={cardRef}
      className={`p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-700 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/10 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 flex items-center justify-center">
          <div className="text-xl text-black transition-transform duration-300 group-hover:scale-110">{icon}</div>
        </div>
        <h3 className="text-lg font-semibold text-foreground">{skill}</h3>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Proficiency</span>
          <span className="text-sm font-medium text-primary">{animatedLevel}%</span>
        </div>
        <Progress value={animatedLevel} className="h-2 bg-muted" />
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

      {/* Decorative element */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors duration-300" />
    </Card>
  )
}
