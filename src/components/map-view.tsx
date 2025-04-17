"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"
import { useTranslations } from 'next-intl'

export function MapView() {
  const mapRef = useRef<HTMLCanvasElement>(null)
  const t = useTranslations('map')

  useEffect(() => {
    // This is a placeholder for a real map implementation
    // In a real app, you would use a library like Mapbox, Google Maps, or Leaflet
    if (mapRef.current) {
      const ctx = mapRef.current.getContext("2d")
      if (ctx) {
        // Draw a simple placeholder map
        ctx.fillStyle = "#f3f4f6"
        ctx.fillRect(0, 0, mapRef.current.width, mapRef.current.height)

        // Draw some roads
        ctx.strokeStyle = "#d1d5db"
        ctx.lineWidth = 6

        // Horizontal roads
        for (let y = 50; y < mapRef.current.height; y += 100) {
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(mapRef.current.width, y)
          ctx.stroke()
        }

        // Vertical roads
        for (let x = 50; x < mapRef.current.width; x += 100) {
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x, mapRef.current.height)
          ctx.stroke()
        }

        // Draw a marker for current location
        ctx.fillStyle = "#3b82f6"
        ctx.beginPath()
        ctx.arc(mapRef.current.width / 2, mapRef.current.height / 2, 10, 0, 2 * Math.PI)
        ctx.fill()
      }
    }
  }, [])

  return (
    <div className="relative h-full w-full bg-muted">
      <canvas ref={mapRef} className="h-full w-full" width={800} height={600} />
      <div className="absolute bottom-4 right-4 bg-background rounded-md shadow-md p-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">{t('yourLocation')}</span>
        </div>
      </div>
    </div>
  )
}
