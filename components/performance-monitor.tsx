"use client"

import { useEffect, useState } from "react"

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage?: number
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    // Measure initial load time
    const loadTime = performance.now()

    // Measure render time
    const renderStart = performance.now()

    requestAnimationFrame(() => {
      const renderEnd = performance.now()
      const renderTime = renderEnd - renderStart

      // Get memory usage if available
      const memoryUsage = (performance as any).memory?.usedJSHeapSize

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime * 100) / 100,
        memoryUsage: memoryUsage ? Math.round(memoryUsage / 1024 / 1024) : undefined,
      })
    })

    // Preload critical resources
    const preloadLinks = ["/modern-developer-workspace.png", "/project-preview.png"]

    preloadLinks.forEach((href) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = href
      document.head.appendChild(link)
    })

    // Cleanup function
    return () => {
      preloadLinks.forEach((href) => {
        const link = document.querySelector(`link[href="${href}"]`)
        if (link) document.head.removeChild(link)
      })
    }
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== "development" || !metrics) return null

  return (
    <div className="fixed bottom-4 right-4 bg-card border border-border rounded-lg p-3 text-xs font-mono z-50 shadow-lg">
      <div className="text-primary font-semibold mb-1">Performance</div>
      <div>Load: {metrics.loadTime}ms</div>
      <div>Render: {metrics.renderTime}ms</div>
      {metrics.memoryUsage && <div>Memory: {metrics.memoryUsage}MB</div>}
    </div>
  )
}
