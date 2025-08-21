"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { MobileNav } from "./mobile-nav"

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  // { id: "contact", label: "Contact" },
]

export function SmoothScrollNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      setIsScrolled(window.scrollY > 50)

      // Find the current section
      const sections = navItems
        .map((item) => {
          const element = document.getElementById(item.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            const top = rect.top + window.scrollY
            return { id: item.id, top }
          }
          return null
        })
        .filter(Boolean) as { id: string; top: number }[]

      const currentSection = sections.sort(
        (a, b) => Math.abs(a.top - scrollPosition) - Math.abs(b.top - scrollPosition),
      )[0]

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-center relative">
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="absolute right-0 flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <MobileNav activeSection={activeSection} onSectionClick={scrollToSection} />
          </div>
        </div>
      </div>
    </nav>
  )
}
