'use client'
import { useEffect, useState } from 'react'

function getTime() {
  const now = new Date()
  return {
    h: now.getHours() % 12,
    m: now.getMinutes(),
    s: now.getSeconds()
  }
}

export default function ClockWidget() {
  const [time, setTime] = useState(getTime())

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 1000)
    return () => clearInterval(interval)
  }, [])

  const { h, m, s } = time

  // SVG clock math
  const hourAngle = (360 / 12) * h + (m / 60) * 30
  const minuteAngle = (360 / 60) * m
  const secondAngle = (360 / 60) * s

  return (
    <div style={{
      position: 'absolute', top: 24, left: 24, zIndex: 3,
      background: '#fff', borderRadius: '50%', padding: 8,
      boxShadow: '0 2px 8px #0002'
    }}>
      <svg width={54} height={54} viewBox="0 0 54 54">
        <circle cx="27" cy="27" r="25" fill="#f7f7f7" stroke="#333" strokeWidth="2" />
        {/* Hour hand */}
        <line
          x1="27" y1="27"
          x2={27 + 11 * Math.sin(Math.PI * hourAngle / 180)}
          y2={27 - 11 * Math.cos(Math.PI * hourAngle / 180)}
          stroke="#0e143a" strokeWidth="3" strokeLinecap="round"
        />
        {/* Minute hand */}
        <line
          x1="27" y1="27"
          x2={27 + 15 * Math.sin(Math.PI * minuteAngle / 180)}
          y2={27 - 15 * Math.cos(Math.PI * minuteAngle / 180)}
          stroke="#3879f3" strokeWidth="2" strokeLinecap="round"
        />
        {/* Second hand */}
        <line
          x1="27" y1="27"
          x2={27 + 18 * Math.sin(Math.PI * secondAngle / 180)}
          y2={27 - 18 * Math.cos(Math.PI * secondAngle / 180)}
          stroke="#fa3e3e" strokeWidth="1" strokeLinecap="round"
        />
        <circle cx="27" cy="27" r="2" fill="#222" />
      </svg>
    </div>
  )
}
