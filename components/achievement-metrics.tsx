"use client"

import { AchievementCounter } from "./achievement-counter"
import { Card } from "@/components/ui/card"

const achievements = [
  {
    number: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful web applications delivered",
    icon: "🚀",
  },
  {
    number: 3,
    suffix: "+",
    label: "Years Experience",
    description: "Professional development experience",
    icon: "⏱️",
  },
  {
    number: 95,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Happy clients and successful projects",
    icon: "⭐",
  },
  {
    number: 8,
    suffix: "+",
    label: "Technologies",
    description: "Modern tech stack mastery",
    icon: "💻",
  },
]

export function AchievementMetrics() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-16">
      {achievements.map((achievement, index) => (
        <Card
          key={index}
          className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {achievement.icon}
          </div>
          <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 font-playfair">
            <AchievementCounter end={achievement.number} suffix={achievement.suffix} duration={2500} />
          </div>
          <h4 className="font-semibold text-foreground mb-1 text-sm lg:text-base">{achievement.label}</h4>
          <p className="text-xs lg:text-sm text-muted-foreground">{achievement.description}</p>
        </Card>
      ))}
    </div>
  )
}
