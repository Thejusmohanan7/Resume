"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ResumeDownload } from "./resume-download"

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

interface MobileNavProps {
  activeSection: string
  onSectionClick: (sectionId: string) => void
}

export function MobileNav({ activeSection, onSectionClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when clicking outside or on section
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".mobile-nav-container")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden mobile-nav-container">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 animate-fade-in-scale">
          <div className="flex flex-col h-full">
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => handleSectionClick(item.id)}
                    className={`w-full justify-start text-lg py-4 px-6 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </div>

            <div className="px-6 pb-8 space-y-4">
              <ResumeDownload />
              <Button
                onClick={() => handleSectionClick("contact")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
