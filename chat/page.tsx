'use client'
import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabaseClient' // fixed path

type Message = {
  id: number
  content: string
  created_at: string
  username?: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [username, setUsername] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  // Fetch existing messages
  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true })
      setMessages(data || [])
    }
    fetchMessages()
  }, [])

  // Subscribe to realtime messages
  useEffect(() => {
    const channel = supabase
      .channel('realtime-chat')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        payload => {
          setMessages(prev => [...prev, payload.new as Message])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  // Auto scroll to newest message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Handle message sending
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    await supabase.from('messages').insert([
      { content: input, username: username || 'Anonymous' }
    ])
    setInput('')
  }

  return (
    <div style={{
      maxWidth: 500,
      margin: '24px auto',
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 16,
      background: '#fff',
      minHeight: 500
    }}>
      <h2>Realtime Chat</h2>

      <div style={{ marginBottom: 8 }}>
        <input
          placeholder="Your name"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ marginRight: 8 }}
        />
      </div>

      <div style={{
        height: 300,
        overflowY: 'auto',
        border: '1px solid #eee',
        padding: 8,
        marginBottom: 8
      }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ margin: '4px 0' }}>
            <b>{msg.username || 'Anonymous'}</b>: {msg.content}
            <span style={{ color: '#999', fontSize: 12, marginLeft: 8 }}>
              {new Date(msg.created_at).toLocaleTimeString()}
            </span>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form onSubmit={sendMessage} style={{ display: 'flex' }}>
        <input
          placeholder="Type a message"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ flex: 1, marginRight: 8 }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
