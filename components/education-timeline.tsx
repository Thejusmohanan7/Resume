"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface EducationItem {
  title: string
  institution: string
  period: string
  description?: string
  icon: string
}

interface EducationTimelineProps {
  items: EducationItem[]
}

export default function EducationTimeline({ items }: EducationTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-card border-4 border-primary rounded-full flex items-center justify-center z-10 shadow-lg">
              <span className="text-sm">{item.icon}</span>
            </div>

            {/* Content card */}
            <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-card-foreground">{item.title}</h3>
                  <Badge variant="outline" className="w-fit mt-2 sm:mt-0 text-xs">
                    {item.period}
                  </Badge>
                </div>

                <p className="text-secondary font-medium mb-3">{item.institution}</p>

                {item.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                )}

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary/20 rounded-full animate-pulse delay-500"></div>
              </motion.div>
            </div>

            {/* Timeline connector line for mobile */}
            <div className="absolute left-8 top-4 w-8 h-0.5 bg-primary/30 md:hidden"></div>
          </motion.div>
        ))}
      </div>

      {/* Timeline end indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: items.length * 0.2 }}
        viewport={{ once: true }}
        className="relative mt-8 md:mt-12"
      >
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg animate-pulse"></div>
      </motion.div>
    </div>
  )
}
