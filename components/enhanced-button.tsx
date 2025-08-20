"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface EnhancedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "lg" | "default"
  onClick?: () => void
  type?: "button" | "submit"
}

export function EnhancedButton({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
  type = "button",
}: EnhancedButtonProps) {
  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden group transition-all duration-300",
        "hover:scale-105 hover:shadow-lg active:scale-95",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
    </Button>
  )
}
