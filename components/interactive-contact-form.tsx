"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EnhancedButton } from "@/components/enhanced-button"
import { Card } from "@/components/ui/card"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function InteractiveContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <Card className="p-6 sm:p-8 bg-card border-border">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-8"
        >
          <div className="text-6xl mb-4">✅</div>
          <h3 className="text-xl font-semibold text-card-foreground mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon!</p>
        </motion.div>
      </Card>
    )
  }

  return (
    <Card className="p-6 sm:p-8 bg-card border-border">
      <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-4 sm:mb-6">Send a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`bg-background border-border text-sm sm:text-base transition-colors ${
              errors.name ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        <div>
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`bg-background border-border text-sm sm:text-base transition-colors ${
              errors.email ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        <div>
          <Input
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            className={`bg-background border-border text-sm sm:text-base transition-colors ${
              errors.subject ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.subject && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.subject}
            </motion.p>
          )}
        </div>

        <div>
          <Textarea
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`bg-background border-border text-sm sm:text-base transition-colors resize-none ${
              errors.message ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errors.message}
            </motion.p>
          )}
          <div className="text-xs text-muted-foreground mt-1 text-right">{formData.message.length}/500</div>
        </div>

        <EnhancedButton
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </div>
          ) : (
            "Send Message"
          )}
        </EnhancedButton>
      </form>
    </Card>
  )
}
