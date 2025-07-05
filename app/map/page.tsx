'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import SplashScreen from '../../components/SplashScreen'
import ClockWidget from '../../components/ClockWidget'
import UserIcon from '../../components/UserIcon'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1Ijoid2VtYXB6IiwiYSI6ImNtY3B1cTBnNjA1OTAycm9vb3I4cWsyNnEifQ.KZwiB9UJXgLZpLlTP6Sskg'; // Replace with your token

const MapboxMap = dynamic(() => import('../../components/MapboxMap'), { ssr: false })

export default function MapPage() {
  const [loading, setLoading] = useState(true)

  // Splash for 2s or until map loaded
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#d6f5f7' }}>
      {loading && <SplashScreen />}
      {!loading && (
        <>
          <ClockWidget />
          <UserIcon />
          <div style={{
            position: 'absolute', left: 0, right: 0, top: 0, bottom: 0
          }}>
            <MapboxMap />
          </div>
          <button
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: 32,
              fontSize: 24,
              background: 'gold',
              color: '#222',
              border: '2px solid #be9117',
              borderRadius: 12,
              padding: '18px 42px',
              boxShadow: '0 2px 10px #0001',
              fontWeight: 'bold',
              cursor: 'pointer',
              zIndex: 2
            }}
            onClick={() => alert('You found some treasure! 🎉')}
          >
            DIG FOR TREASURE
          </button>
        </>
      )}
    </div>
  )
}
