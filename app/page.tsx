'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh'
    }}>
      <h1>Pilolo Realtime App</h1>
      <Link href="/chat">
        <button style={{ margin: 8, fontSize: 18, padding: '8px 24px' }}>Realtime Chat</button>
      </Link>
      <Link href="/map">
        <button style={{ margin: 8, fontSize: 18, padding: '8px 24px' }}>Map Page</button>
      </Link>
    </main>
  )
}
