"use client"

import { useEffect, useRef } from "react"

export function GeometricShapes() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollY = window.scrollY
      const shapes = containerRef.current.querySelectorAll(".floating-shape")

      shapes.forEach((shape, index) => {
        const speed = 0.5 + index * 0.1
        const yPos = scrollY * speed
        const rotation = scrollY * (0.1 + index * 0.05)
        ;(shape as HTMLElement).style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="floating-shape absolute top-20 left-10 w-16 h-16 border-2 border-primary/20 rotate-45 animate-pulse" />
      <div
        className="floating-shape absolute top-40 right-20 w-12 h-12 bg-secondary/10 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div className="floating-shape absolute top-60 left-1/4 w-8 h-8 bg-primary/15 transform rotate-12" />
      <div className="floating-shape absolute top-80 right-1/3 w-20 h-20 border border-secondary/20 rounded-lg rotate-12" />
      <div
        className="floating-shape absolute top-96 left-1/2 w-6 h-6 bg-primary/20 rounded-full animate-ping"
        style={{ animationDelay: "2s" }}
      />

      {/* Additional shapes for depth */}
      <div className="floating-shape absolute top-1/2 left-16 w-14 h-14 border-2 border-secondary/15 rotate-45" />
      <div
        className="floating-shape absolute top-2/3 right-16 w-10 h-10 bg-primary/10 transform rotate-45 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="floating-shape absolute bottom-40 left-1/3 w-18 h-18 border border-primary/20 rounded-full" />
      <div
        className="floating-shape absolute bottom-60 right-1/4 w-12 h-12 bg-secondary/15 rotate-12 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Gradient orbs */}
      <div className="floating-shape absolute top-32 right-1/2 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl animate-pulse" />
      <div
        className="floating-shape absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "3s" }}
      />
    </div>
  )
}
