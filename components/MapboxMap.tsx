'use client'
import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ''

export default function MapboxMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map>()

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [0, 0],
      zoom: 2
    })

    // Clean up on unmount
    return () => {
      mapRef.current?.remove()
      mapRef.current = undefined
    }
  }, [])

  return (
    <div ref={mapContainer} style={{
      width: '100vw', height: '100vh',
      minHeight: 400,
      borderRadius: 12,
      overflow: 'hidden',
      zIndex: 1
    }} />
  )
}
