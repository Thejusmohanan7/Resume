"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface SkillCardProps {
  skill: string
  level: number
  description?: string
}

export function SkillCard({ skill, level, description }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer bg-card border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <h3 className="font-semibold text-card-foreground mb-2">{skill}</h3>
        <div className="w-full bg-muted rounded-full h-2 mb-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: isHovered ? `${level}%` : "0%" }}
          />
        </div>
        <div className="text-sm text-muted-foreground">{level}% proficiency</div>
        {description && (
          <div
            className={`mt-3 text-sm text-muted-foreground transition-all duration-300 ${
              isHovered ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
            } overflow-hidden`}
          >
            {description}
          </div>
        )}
      </div>
    </Card>
  )
}
